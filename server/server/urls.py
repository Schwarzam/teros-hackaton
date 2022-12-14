"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static

from django.conf import settings

from api.views import upload, get_files_available, visualize_df, predict, delete_df, compare_to

urlpatterns = [
    path('api/admin/', admin.site.urls),

    path('api/upload', upload),
    path('api/get_files_available', get_files_available),

    path('api/visualize_df', visualize_df),

    path('api/predict', predict),
    path('api/delete_df', delete_df), 
    path('api/compare_to', compare_to)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
