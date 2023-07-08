from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ImageSerializer
from .models import imageDetails

@api_view(['GET'])
def image_list(request):
    images = imageDetails.objects.all()
    serializer = ImageSerializer(images, many=True)
    return Response(serializer.data)
