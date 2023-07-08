from django.db import models


class imageDetails(models.Model):

    image_url = models.TextField()
    refid= models.CharField(max_length=200)