# Generated by Django 4.0.2 on 2022-02-24 04:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_movimiento_producto_movimientodetalle'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movimiento',
            name='ambiente_id',
        ),
        migrations.AddField(
            model_name='movimiento',
            name='ambiente_destino',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='ambiente_destino', to='api.ambiente'),
        ),
        migrations.AddField(
            model_name='movimiento',
            name='ambiente_origen',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.RESTRICT, related_name='ambiente_origen', to='api.ambiente'),
        ),
    ]
