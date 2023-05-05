# Generated by Django 4.0 on 2023-02-01 13:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.CharField(max_length=500)),
                ('seen', models.BooleanField(default=False)),
                ('msg_receiver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='msg_receiver', to='accounts.user')),
                ('msg_sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='msg_sender', to='accounts.user')),
            ],
        ),
    ]