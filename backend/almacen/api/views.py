from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Categoria
from .serializers import CategoriaSerializer

class IndexView(APIView):
    def get(self,request):
        context={'ok':'server is running'}
        return Response(context)

class CategoriaView(APIView):

    def get(self,request):
        dataCategoria=Categoria.objects.all()
        serCategoria=CategoriaSerializer(dataCategoria,many=True)
        return Response(serCategoria.data)

    def post(self,request):
        serCategoria=CategoriaSerializer(data=request.data)
        serCategoria.is_valid(raise_exception=True)
        serCategoria.save()
        return Response(serCategoria.data)

class CategoriaDetailView(APIView):

    def get(self,request,categoria_id):
        dataCategoria=Categoria.objects.get(pk=categoria_id)
        serCategoria=CategoriaSerializer(dataCategoria)
        return Response(serCategoria.data)

    def put(self,request,categoria_id):
        dataCategoria=Categoria.objects.get(pk=categoria_id)
        serCategoria=CategoriaSerializer(dataCategoria,data=request.data)
        serCategoria.is_valid(raise_exception=True)
        serCategoria.save()
        return Response(serCategoria.data)

    def delete(self,request,categoria_id):
        dataCategoria=Categoria.objects.get(pk=categoria_id)
        serCategoria=CategoriaSerializer(dataCategoria)
        dataCategoria.delete()
        return Response(serCategoria.data)