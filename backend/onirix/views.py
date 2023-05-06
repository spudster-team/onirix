from django.contrib.auth.models import User
from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView

from onirix.models import Dream, AdditionalInfo


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
            if User.objects.filter(email=user_serializer.validated_data["email"]).exists():
                return Response({"email": ["email déja utilisé"]})
            user = user_serializer.save()
            data = {
                "username": user.username,
                "email": user.email
            }
            return Response(data, status=status.HTTP_201_CREATED)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        if request.user.is_autheticated:
            user = User.objects.get(pk=request.user.id)
            data = {
                "username": user.username,
                "email": user.email
            }
            return Response(data, status=status.HTTP_201_CREATED)

        return Response("you are not authorized", status=status.HTTP_401_UNAUTHORIZED)


class DreamSerializer(serializers.Serializer):
    description = "description"


class DreamView(APIView):
    def post(self, request):
        dream_serializer = DreamSerializer(data=request.data)
        if dream_serializer.is_valid():
            # Todo get some information from api
            if request.user.is_autheticated:
                # if user is authenticated : save dream and additional info into database
                user = User.objects.get(pk=request.user.id)

                dream = Dream.objects.create(
                    description="description",
                    prediction="prediction",
                    id_user=user
                )

                additional_info = AdditionalInfo.objects.create(
                    link="link",
                    title="title",
                    type="title",
                    id_dream=dream
                )

                data = {
                    "description": dream.description,
                    "prediction": dream.prediction,
                    "additinal_info": [],
                }
                return Response(data, status=status.HTTP_201_CREATED)
            else:
                data = {"test": "some test"}
                return Response(data, status=status.HTTP_200_OK)
        else:
            return Response(dream_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
