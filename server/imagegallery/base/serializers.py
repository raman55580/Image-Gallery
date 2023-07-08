from rest_framework import serializers
from .models import imageDetails

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = imageDetails
        fields = '__all__'
