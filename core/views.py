from django.shortcuts import render
# Create your views here.
from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.shortcuts import render
from django import template
from django.template.loader import get_template 
from django.template import Context
from django.views.generic import TemplateView
from core.models import social_content
from core.models import signUp_user
from django.db.models import *
from django.db.models.query import *
from django.db.models.query import *
import datetime
from django.views.decorators.csrf import csrf_exempt

poll = social_content.objects.filter(text__icontains = 'sports')

count = poll.count()
print count
count = count - 1840
print count 
a = 0
b = 5
def get_tweets(request):
	global count
	global a
	global b

	onload = request.GET.get('on_load', None)
	if onload == 'first':
		a = 0
		b = 5
	tweet_array = []
	name_array = []
	date_array = []
	time_array = []
	for i in range(a,b):
		tweet_array.append(poll[i].text.encode('utf-8'))
		name_array.append(poll[i].author.nm)
		date_array.append(poll[i].c_at.date())
		time_array.append(poll[i].c_at.time())
		
	a = b
	b = b + 5

	data = {
			'total_count':count,
			'a_val':a-10,
			'b_val':b-10,
			'tweet':tweet_array,
			'p_name':name_array,
			'tweet_date_timing':date_array,
			'tweet_time':time_array
	}
	return JsonResponse(data)


@csrf_exempt
def user_signUP(request):
	name = request.GET.get('name', None)
	password = request.GET.get('password', None)
	email = request.GET.get('email', None)

	single_user = signUp_user.objects.create(
     name=name,
     email=email,
     password=password
	 )

	single_user.save()


	return HttpResponse(None)



class SplashView(TemplateView):
	template_name = "index.html"

# class personalized(TemplateView):
# 	template_name = "personalized_view.html"