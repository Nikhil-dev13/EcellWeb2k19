# Generated by Django 2.2.2 on 2019-07-30 17:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('caportal', '0002_auto_20190730_1648'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubmitTask',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('proof_checker', models.CharField(max_length=500)),
                ('proof_pic', models.ImageField(upload_to='static/caportal/')),
                ('status', models.CharField(choices=[['pending', 'pending'], ['accepted', 'accepted'], ['rejected', 'rejected']], default='pending', max_length=500)),
                ('msg', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('proof_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='caportal.Task')),
            ],
            options={
                'unique_together': {('task', 'proof_by')},
            },
        ),
    ]