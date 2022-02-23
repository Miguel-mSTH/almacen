from dataclasses import field, fields
from rest_framework import serializers

from .models import Categoria,Ambiente

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categoria
        fields='__all__'

class AmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ambiente
        fields='__all__'