from dataclasses import dataclass
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Categoria,Ambiente
from .serializers import CategoriaSerializer,AmbienteSerializer

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

class AmbienteView(APIView):
    def get(self,request):
        dataAmbiente=Ambiente.objects.all()
        serAmbiente=AmbienteSerializer(dataAmbiente,many=True)
        return Response(serAmbiente.data)

    def post(self,request):
        serAmbiente=AmbienteSerializer(data=request.data)
        serAmbiente.is_valid(raise_exception=True)
        serAmbiente.save()
        return Response(serAmbiente.data)

class AmbienteDetailView(APIView):
    def get(self,request,ambiente_id):
        dataAmbiente=Ambiente.objects.get(pk=ambiente_id)
        serAmbiente=AmbienteSerializer(dataAmbiente)
        return Response(serAmbiente.data)

    def put(self,request,ambiente_id):
        dataAmbiente=Ambiente.objects.get(pk=ambiente_id)
        serAmbiente=AmbienteSerializer(dataAmbiente,data=request.data)
        serAmbiente.is_valid(raise_exception=True)
        serAmbiente.save()
        return Response(serAmbiente.data)

    def delete(self,request,ambiente_id):
        dataAmbiente=Ambiente.objects.get(pk=ambiente_id)
        serAmbiente=AmbienteSerializer(dataAmbiente)
        dataAmbiente.delete()
        return Response(serAmbiente.data)