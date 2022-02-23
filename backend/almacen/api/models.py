from django.db import models

# Create your models here.
class Categoria(models.Model):
    categoria_nombre=models.CharField(max_length=100)

    def __str__(self):
        return self.categoria_nombre

class Ambiente(models.Model):
    ambiente_nombre=models.CharField(max_length=100);
    ambiente_ubicacion=models.CharField(max_length=200);
    ambiente_tipo=models.IntegerField(default=1);

    def __str__(self):
        return self.ambiente_nombre