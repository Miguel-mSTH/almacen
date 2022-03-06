from django.urls import path

from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from rest_framework_simplejwt.views import TokenVerifyView

urlpatterns=[
    path('',views.IndexView.as_view(),name='index'),
    path('categorias',views.CategoriaView.as_view(),name='categorias'),
    path('categoria/<int:categoria_id>',views.CategoriaDetailView.as_view()),
    path('ambientes',views.AmbienteView.as_view(),name='ambiente'),
    path('ambiente/<int:ambiente_id>',views.AmbienteDetailView.as_view()),
    path('productos',views.ProductoView.as_view(),name='producto'),
    path('producto/<int:producto_id>',views.ProductoDetailView.as_view()),
    path('movimientos',views.MovimientoView.as_view(),name='movimiento'),
    path('movimiento/<int:movimiento_id>',views.MovimientoDetailView.as_view()),
    path('movdetalles',views.MovimientoDetalleView.as_view(),name='ambiente'),
    path('movdetalle/<int:movdetalle_id>',views.MovimientoDetalleDetailView.as_view()),
    path('usuario',views.UsuarioView.as_view(),name='usuario'),
    path('login',views.UsuarioLoginView.as_view()),
    path('login/refresh',TokenRefreshView.as_view()),
    path('verificar',TokenVerifyView.as_view()),
    path('blacklist/', views.LogoutView.as_view(), name='blacklist')
]