# Generated by Django 4.1.7 on 2023-05-07 06:59

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Dream',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('prediction', models.CharField(max_length=255)),
                ('date', models.DateTimeField(default=datetime.datetime(2023, 5, 7, 6, 59, 47, 618842))),
                ('id_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='AdditionalInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link', models.CharField(max_length=300, null=True)),
                ('title', models.CharField(max_length=255)),
                ('image', models.CharField(max_length=300, null=True)),
                ('type', models.CharField(max_length=10)),
                ('id_dream', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='onirix.dream')),
            ],
        ),
    ]
