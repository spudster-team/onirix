from django.contrib.auth.models import User
from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView

from onirix.models import AdditionalInfo, Dream
from onirix.utils.additional_info import search_on_youtube, search_book
from onirix.utils.info import gener_random_response


# Create your views here.

class UserInputSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100)
    email = serializers.CharField()
    password = serializers.CharField(max_length=100)

    def create(self, validated_data):
        return User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"]
        )


class UserView(APIView):
    def post(self, request):
        user_serializer = UserInputSerializer(data=request.data)

        if user_serializer.is_valid():
            if User.objects.filter(email=user_serializer.validated_data["email"],
                                   username=user_serializer.validated_data["username"]).exists():
                return Response({"message": ["username or email have been used"]})
            user = user_serializer.save()
            data = {
                "username": user.username,
                "email": user.email
            }
            return Response(data, status=status.HTTP_201_CREATED)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        if request.user.is_authenticated:
            user = User.objects.get(pk=request.user.id)
            data = {
                "username": user.username,
                "email": user.email
            }
            return Response(data, status=status.HTTP_201_CREATED)

        return Response("you are not authorized", status=status.HTTP_401_UNAUTHORIZED)


class DreamSerializer(serializers.Serializer):
    description = serializers.CharField(max_length=255)


class DreamView(APIView):
    def post(self, request):
        dream_serializer = DreamSerializer(data=request.data)

        if dream_serializer.is_valid():
            result = gener_random_response()
            keyword = result["keywords"][0]
            youtube_videos = search_on_youtube(keyword)
            books = search_book(keyword)

            result["additional_info"] = youtube_videos + books

            if request.user.is_authenticated:
                user = User.objects.get(pk=request.user.id)

                dream = Dream.objects.create(
                    description=dream_serializer.validated_data["description"],
                    prediction=result["prediction"],
                    id_user=user
                )

                for info_video, info_book in zip(youtube_videos, books):
                    AdditionalInfo.objects.create(
                        link=info_video["link"],
                        title=info_video["title"],
                        type=info_video["type"],
                        image=info_video["thumbnail"],
                        id_dream=dream
                    )

                    AdditionalInfo.objects.create(
                        title=info_book["title"],
                        type=info_book["type"],
                        id_dream=dream
                    )

                return Response(result, status=status.HTTP_201_CREATED)
            else:
                return Response(result, status=status.HTTP_200_OK)
        else:
            return Response(dream_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Dream
        fields = ["description", "prediction"]


class History(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            user = User.objects.get(pk=request.user.id)
            dream_history = Dream.objects.filter(id_user=user)
            history_serializer = HistorySerializer(dream_history, many=True)
            return Response(history_serializer.data, status=status.HTTP_200_OK)
        return Response("user is not authenticated", status=status.HTTP_400_BAD_REQUEST)
