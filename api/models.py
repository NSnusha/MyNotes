from django.db import models

# Create your models here.

#db replica is created here

class Note(models.Model):
    body = models.TextField(null=True,blank=True)
    updated= models.DateTimeField(auto_now=True) #this is gng to take timestamp of when we updated/created and saved in db
    created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]
