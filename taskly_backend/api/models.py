from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # extra fields you may want for Taskly
    
    def __str__(self):
        return self.username
