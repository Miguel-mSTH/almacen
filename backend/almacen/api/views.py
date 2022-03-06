from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Categoria,Ambiente,Producto,Movimiento,MovimientoDetalle
from django.contrib.auth.models import User
from .serializers import CategoriaSerializer,AmbienteSerializer,ProductoSerializer,MovimientoSerializer,MovimientoDetalleSerializer,UsuarioSerializer,UsuarioLoginSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken

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

class ProductoView(APIView):
    def get(self,request):
        dataProducto=Producto.objects.all()
        serProducto=ProductoSerializer(dataProducto,many=True)
        return Response(serProducto.data)

    def post(self,request):
        serProducto=ProductoSerializer(data=request.data)
        serProducto.is_valid(raise_exception=True)
        serProducto.save()
        return Response(serProducto.data)
class ProductoDetailView(APIView):
    def get(self,request,producto_id):
        dataProducto=Producto.objects.get(pk=producto_id)
        serProducto=ProductoSerializer(dataProducto)
        return Response(serProducto.data)

    def put(self,request,producto_id):
        dataProducto=Producto.objects.get(pk=producto_id)
        serProducto=ProductoSerializer(dataProducto,data=request.data)
        serProducto.is_valid(raise_exception=True)
        serProducto.save()
        return Response(serProducto.data)

    def delete(self,request,producto_id):
        dataProducto=Producto.objects.get(pk=producto_id)
        serProducto=ProductoSerializer(dataProducto)
        dataProducto.delete()
        return Response(serProducto.data)
class MovimientoView(APIView):
    def get(self,request):
        dataMovimiento=Movimiento.objects.all()
        serMovimiento=MovimientoSerializer(dataMovimiento,many=True)
        return Response(serMovimiento.data)

    def post(self,request):
        serMovimiento=MovimientoSerializer(data=request.data)
        serMovimiento.is_valid(raise_exception=True)
        serMovimiento.save()
        return Response(serMovimiento.data)
class MovimientoDetailView(APIView):
    def get(self,request,movimiento_id):
        dataMovimiento=Movimiento.objects.get(pk=movimiento_id)
        serMovimiento=MovimientoSerializer(dataMovimiento)
        return Response(serMovimiento.data)

    def put(self,request,movimiento_id):
        dataMovimiento=Movimiento.objects.get(pk=movimiento_id)
        serMovimiento=MovimientoSerializer(dataMovimiento,data=request.data)
        serMovimiento.is_valid(raise_exception=True)
        serMovimiento.save()
        return Response(serMovimiento.data)

    def delete(self,request,movimiento_id):
        dataMovimiento=Producto.objects.get(pk=movimiento_id)
        serMovimiento=ProductoSerializer(dataMovimiento)
        dataMovimiento.delete()
        return Response(serMovimiento.data)

class MovimientoDetalleView(APIView):
    def get(self,request):
        dataMovimientoDetalle=MovimientoDetalle.objects.all()
        serMovimientoDetalle=MovimientoDetalleSerializer(dataMovimientoDetalle,many=True)
        return Response(serMovimientoDetalle.data)

    def post(self,request):
        serMovimientoDetalle=MovimientoDetalleSerializer(data=request.data)
        serMovimientoDetalle.is_valid(raise_exception=True)
        serMovimientoDetalle.save()
        return Response(serMovimientoDetalle.data)

class MovimientoDetalleDetailView(APIView):
    def get(self,request,movdetalle_id):
        dataMovimientoDetalle=MovimientoDetalle.objects.get(pk=movdetalle_id)
        serMovimientoDetalle=MovimientoDetalleSerializer(dataMovimientoDetalle)
        return Response(serMovimientoDetalle.data)

    def put(self,request,movdetalle_id):
        dataMovimientoDetalle=Movimiento.objects.get(pk=movdetalle_id)
        serMovimientoDetalle=MovimientoSerializer(dataMovimientoDetalle,data=request.data)
        serMovimientoDetalle.is_valid(raise_exception=True)
        serMovimientoDetalle.save()
        return Response(serMovimientoDetalle.data)

    def delete(self,request,movdetalle_id):
        dataMovimientoDetalle=Producto.objects.get(pk=movdetalle_id)
        serMovimientoDetalle=ProductoSerializer(dataMovimientoDetalle)
        dataMovimientoDetalle.delete()
        return Response(serMovimientoDetalle.data)

class UsuarioLoginView(TokenObtainPairView):
    #permission_classes=(AllowAny)
    serializer_class=UsuarioLoginSerializer

class UsuarioView(APIView):
    def get(self,request):
        usuarioData=User.objects.all()
        usuarioSer=UsuarioSerializer(usuarioData,many=True)
        return Response(usuarioSer.data)

    def post(self,request):
        usuarioSer=UsuarioSerializer(data=request.data)
        usuarioSer.is_valid(raise_exception=True)
        usuarioSer.save()
        return Response(usuarioSer.data)

class LogoutView(APIView):
    #permission_classes = (AllowAny)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)