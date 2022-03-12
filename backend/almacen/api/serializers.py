from rest_framework import serializers

from .models import Categoria,Ambiente,Producto,Movimiento,MovimientoDetalle
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings

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

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('username','password','email','first_name','last_name')
        extra_kwargs={'password':{'write_only':True}}

    def create(self,validated_data):
        nuevoUsuario=User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        nuevoUsuario.set_password(validated_data['password'])
        nuevoUsuario.save()

        return nuevoUsuario

class UsuarioLoginSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls,user):
        token=super(UsuarioLoginSerializer,cls).get_token(user)

        token['username']=user.username
        return token

    def validate(self,attrs):
        data=super().validate(attrs)

        refresh=self.get_token(self.user)

        #data["refresh"]=str(refresh)
        data["token"]=str(refresh.access_token)
        data["user"]=str(self.user.username)
        data["id"]=self.user.id

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None,self.user)

        return data