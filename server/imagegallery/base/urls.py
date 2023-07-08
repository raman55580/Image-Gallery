from django.urls import path
from .views import image_list

urlpatterns = [
    path('api/getimage/',image_list, name='imagelist'),
]
