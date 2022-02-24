from django.db import models

from cloudinary.models import CloudinaryField
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

class Producto(models.Model):
    NUEVO='nuevo'
    BUENO='bueno'
    DEFECTUOSO='defectuoso'

    ESTADO_CHOICES=(
        (NUEVO,'Nuevo'),
        (BUENO,'Bueno'),
        (DEFECTUOSO,'Defectuoso'),
    )

    categoria_id=models.ForeignKey(Categoria,on_delete=models.RESTRICT)
    producto_nombre = models.CharField(max_length=200)
    producto_fecreg=models.DateTimeField()
    producto_estado=models.CharField(max_length=20,default='nuevo',choices=ESTADO_CHOICES)
    producto_imgurl=CloudinaryField('image',default='')
    producto_unidad=models.CharField(max_length=5)

    def __str__(self):
        return self.producto_nombre

class Movimiento(models.Model):
    REALIZADO='realizado'
    PROCESO='proceso'

    ESTADO_CHOICES=(
        (REALIZADO,'Realizado'),
        (PROCESO,'Proceso')
    )
    #ambiente_origen=models.ForeignKey(Ambiente,related_name='Movimiento_Origen',to_field='ambiente_ubicacion',on_delete=models.RESTRICT,db_column='ambiente_origen',verbose_name='Origen')
    #ambiente_destino=models.ForeignKey(Ambiente,related_name='Movimiento_Destino',to_field='ambiente_ubicacion',on_delete=models.RESTRICT,db_column='ambiente_destino',verbose_name='Destino')
    ambiente_origen=models.ForeignKey(Ambiente,related_name='ambiente_origen', on_delete=models.RESTRICT,null=True)
    ambiente_destino=models.ForeignKey(Ambiente,related_name='ambiente_destino',on_delete=models.RESTRICT,null=True)
    #ambiente_origen=models.ForeignKey(Ambiente,on_delete=models.RESTRICT)
    #ambiente_destino=models.ForeignKey(Ambiente,on_delete=models.RESTRICT)
    movimiento_fecha=models.DateTimeField()
    movimiento_tipo=models.IntegerField(default=1)
    movimiento_estado=models.CharField(max_length=20,default='realizado',choices=ESTADO_CHOICES)
    movimiento_observaciones=models.CharField(max_length=500)

    def __str__(self):
        return str(self.movimiento_estado)

class MovimientoDetalle(models.Model):
    REALIZADO='realizado'
    PROCESO='proceso'

    ESTADO_CHOICES=(
        (REALIZADO,'Realizado'),
        (PROCESO,'Proceso')
    )
    producto_id=models.ForeignKey(Producto,on_delete=models.RESTRICT)
    movimiento_id=models.ForeignKey(Movimiento,on_delete=models.RESTRICT)
    movdetalle_estado=models.CharField(max_length=20,default='realizado',choices=ESTADO_CHOICES)
    #como hacer que no sea obligatorio los decimales
    movdetalle_cantidad=models.DecimalField(max_digits=5,decimal_places=2)
    #doublefield
    #floatfield--
    movdetalle_sku=models.CharField(max_length=100)
    movdetalle_glosa=models.CharField(max_length=500)

    def __str__(self):
        return str(self.movdetalle_cantidad)