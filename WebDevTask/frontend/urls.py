from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('add_user', views.index),
    path('edit_user', views.index),
    path('delete_user', views.index),
    path('about', views.index),
    
]