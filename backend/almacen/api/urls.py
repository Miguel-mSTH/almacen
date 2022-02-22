from django.urls import path

from . import views

urlpatterns=[
    path('',views.IndexView.as_view(),name='index'),
    path('categorias',views.CategoriaView.as_view(),name='categorias'),
    path('categoria/<int:categoria_id>',views.CategoriaDetailView.as_view()),
]