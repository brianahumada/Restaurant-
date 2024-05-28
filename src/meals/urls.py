from django.urls import path
from . import views

app_name = 'meals'

urlpatterns = [
    path('', views.meal_list,name='meal_list'),
    path('<slug:slug>', views.meal_detail, name='meal_detail'),
]


"""
Importación de módulos:
from django.urls import path: Importa la función path de Django, que se utiliza para definir rutas URL en tu aplicación.
from . import views: Importa el módulo de vistas (views.py) desde el directorio actual (.) de tu aplicación.
Definición del espacio de nombres de la aplicación:
app_name = 'meals': Define un espacio de nombres para las URL de tu aplicación. Esto es útil cuando tienes múltiples aplicaciones en tu proyecto Django y quieres evitar conflictos de nombres de URL.
Configuración de las URL:
urlpatterns: Es una lista de objetos de ruta URL que define las URL para tu aplicación.
path('', views.meal_list): Define una ruta URL vacía que apunta a la vista meal_list. Esto significa que cuando alguien visite la ruta base de tu aplicación (por ejemplo, http://tudominio.com/meals/), se mostrará la lista de comidas.
path('<slug:slug>', views.meal_detail, name='meal_detail'): Define una ruta URL con un parámetro dinámico slug. Este patrón de URL captura un slug único que identifica una comida específica. Por ejemplo, cuando alguien visite una URL como http://tudominio.com/meals/nombre-de-la-comida/, se llamará a la vista meal_detail para mostrar los detalles de esa comida. El parámetro name='meal_detail' asigna un nombre a esta ruta URL, lo que permite referenciarla de manera única en tus plantillas HTML usando el sistema de plantillas de Django.
"""
