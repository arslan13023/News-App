from __future__ import unicode_literals
from django.db import models
from django import forms
import datetime
from social_Content import *

	
class signUp_user(Document):
    name = StringField(max_length = 150) # id_str
    email = StringField(max_length=500) #tweet
    password = StringField(max_length = 500) # source
    creation_date = DateTimeField() # created_at  default=datetime.datetime.now
    meta = { "col	lection":"signUp_user",'strict': False}
    meta = {'allow_inheritance': True}





    

