# Generated by Django 4.0.3 on 2022-04-13 08:45

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
            name='Branch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('branch_name', models.CharField(max_length=30, verbose_name='Название филиала')),
                ('address', models.CharField(max_length=100, verbose_name='Адрес')),
            ],
            options={
                'verbose_name': 'Филиал',
                'verbose_name_plural': 'Филиалы',
            },
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('legal_name', models.CharField(max_length=50, verbose_name='Юридическое имя')),
            ],
            options={
                'verbose_name': 'Юридическое имя',
                'verbose_name_plural': 'Юридические имена',
            },
        ),
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=40)),
                ('last_name', models.CharField(max_length=20)),
                ('card_number', models.CharField(max_length=20, null=True, verbose_name='Номер карты')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Аватар')),
                ('id_branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='id_branch', to='tip.branch')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Сотрудник',
                'verbose_name_plural': 'Сотрудники',
            },
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sum_tea', models.IntegerField(verbose_name='Сумма чаевых')),
                ('data', models.DateField(auto_now_add=True, verbose_name='дата')),
                ('rating', models.IntegerField(choices=[(1, 'единица'), (2, 'двойка'), (3, 'тройка'), (4, 'четвёрка'), (5, 'пятёрка')], null=True, verbose_name='Рейтинг')),
                ('review', models.TextField(null=True, verbose_name='Отзыв о сотруднике')),
                ('staff', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='staff', to='tip.staff')),
            ],
            options={
                'verbose_name': 'Чаевые',
                'verbose_name_plural': 'Чаевые',
            },
        ),
        migrations.CreateModel(
            name='Leader',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=20, null=True, verbose_name='Номер телефона')),
                ('first_name', models.CharField(max_length=40)),
                ('last_name', models.CharField(max_length=20)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Руководитель',
                'verbose_name_plural': 'Руководители',
            },
        ),
        migrations.AddField(
            model_name='branch',
            name='leader',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='leader', to='tip.leader'),
        ),
        migrations.AddField(
            model_name='branch',
            name='organization',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='organization', to='tip.organization'),
        ),
    ]
