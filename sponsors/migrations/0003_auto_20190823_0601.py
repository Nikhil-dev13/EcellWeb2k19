# Generated by Django 2.2.2 on 2019-08-23 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sponsors', '0002_sponsor_ecell_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sponsor',
            name='spons_type',
            field=models.CharField(choices=[('ATS', 'Associate Sponsors'), ('PTS', 'Platinum Sponsors'), ('GDS', 'Gold Sponsors'), ('TLS', 'Title Sponsors'), ('PRS', 'Partner Sponsors')], default='ATS', max_length=3),
        ),
    ]
