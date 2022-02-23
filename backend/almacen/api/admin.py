from django.contrib import admin

# Register your models here.
from .models import Categoria,Ambiente, Movimiento, MovimientoDetalle, Producto

admin.site.register(Categoria)
admin.site.register(Ambiente)
admin.site.register(Producto)
admin.site.register(Movimiento)
admin.site.register(MovimientoDetalle)