from __future__ import unicode_literals
from django.db import models
from django import forms
import datetime
from social_Content import *

	
class signUp_user(Document):
    name = StringField(max_length = 150) # id_str
    email = StringField(max_length=500) #tweet
    password = StringField(max_length = 500) # source
    meta = { "collection":"social_content",'strict': False}
    meta = {'allow_inheritance': True}



    

