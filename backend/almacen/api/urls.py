from django.urls import path

from . import views

urlpatterns=[
    path('',views.IndexView.as_view(),name='index'),
    path('categorias',views.CategoriaView.as_view(),name='categorias'),
    path('categoria/<int:categoria_id>',views.CategoriaDetailView.as_view()),
    path('ambientes',views.AmbienteView.as_view(),name='ambiente'),
    path('ambiente/<int:ambiente_id>',views.AmbienteDetailView.as_view()),
]