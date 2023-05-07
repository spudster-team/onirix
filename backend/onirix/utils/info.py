import random

from django.conf import settings


def gener_random_response():
    json = settings.ABOUT_DREAM
    r = json[random.randrange(0, 5)]
    return r
