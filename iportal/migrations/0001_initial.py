# Generated by Django 2.2.2 on 2019-08-18 18:42

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
            name='Startup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('contact', models.CharField(max_length=15)),
                ('brief', models.CharField(max_length=256)),
                ('description', models.TextField(blank=True)),
                ('sector', models.CharField(max_length=100)),
                ('address1', models.CharField(max_length=200)),
                ('address2', models.CharField(max_length=200)),
                ('district', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=100)),
                ('approved', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='StartupLogo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logo', models.ImageField(upload_to='static/uploads/iportal/logos/')),
                ('startup', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='iportal.Startup')),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('location', models.CharField(max_length=200)),
                ('start_date', models.DateTimeField()),
                ('duration', models.CharField(max_length=200)),
                ('job_type', models.CharField(choices=[('Internship', 'Internship'), ('Internship with job offer', 'Internship with job offer'), ('Full time employee', 'Full time employee'), ('Parttime', 'Parttime'), ('Freelance', 'Freelance')], max_length=200)),
                ('about_the_job', models.TextField()),
                ('no_of_opening', models.IntegerField()),
                ('skills_required', models.TextField()),
                ('who_can_apply', models.TextField()),
                ('perks', models.TextField(blank=True)),
                ('stipend', models.IntegerField()),
                ('apply_by', models.DateTimeField()),
                ('posted_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('startup', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='iportal.Startup')),
            ],
        ),
        migrations.CreateModel(
            name='Founder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('contact', models.CharField(blank=True, max_length=15)),
                ('linkedin', models.URLField(blank=True)),
                ('startup', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='iportal.Startup')),
            ],
        ),
        migrations.CreateModel(
            name='JobApplication',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('PND', 'pending'), ('RJD', 'rejected'), ('HRD', 'hired'), ('URV', 'Under Review')], default='pending', max_length=100)),
                ('ques1', models.TextField()),
                ('ques2', models.TextField()),
                ('resume', models.FileField(upload_to='static/uploads/iportal/resumes/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('applicant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('job', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='iportal.Job')),
            ],
            options={
                'unique_together': {('job', 'applicant')},
            },
        ),
    ]
