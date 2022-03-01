from dataclasses import field, fields
from rest_framework import serializers

from .models import Categoria,Ambiente,Producto,Movimiento,MovimientoDetalle

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Categoria
        fields='__all__'

class AmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ambiente
        fields='__all__'

class ProductoSerializer(serializers.ModelSerializer):
    categoria_id=serializers.StringRelatedField()
    producto_fecreg=serializers.DateTimeField(format="%d-%m-%Y")
    class Meta:
        model=Producto
        fields='__all__'

class MovimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Movimiento
        fields='__all__'

class MovimientoDetalleSerializer(serializers.ModelSerializer):
    class Meta:
        model=MovimientoDetalle
        fields='__all__'