from django.shortcuts import render
from .models import Meals, Category
# Create your views here.

def meal_list(request):
    meal_list = Meals.objects.all() # lista de productos
    categories = Category.objects.all() 
    context = {
        'meal_list':meal_list,
        'categories': categories,
        }
    return render(request, 'Meals/list.html', context)

def meal_detail(request,slug):
    meal_detail = Meals.objects.get(slug=slug)
    context = {'meal_detail':meal_detail}
    return render(request, 'Meals/detail.html', context)


"""

Estas vistas están diseñadas para manejar las solicitudes relacionadas con las comidas en tu aplicación Django. Aquí hay una explicación detallada de cada una:

Vista meal_list:
Esta vista maneja las solicitudes para mostrar una lista de comidas.
Meals.objects.all() obtiene todos los objetos de Meals en la base de datos y los asigna a la variable meal_list.
Se crea un diccionario context que contiene la lista de comidas obtenidas.
Luego, la función render() toma la solicitud (request), la plantilla 'Meals/list.html', y el contexto (context) y renderiza la plantilla con el contexto proporcionado, devolviendo la página HTML resultante como respuesta.
Vista meal_detail:
Esta vista maneja las solicitudes para mostrar los detalles de una comida específica, identificada por su slug.
Toma un parámetro adicional slug, que representa el slug de la comida que se mostrará.
Meals.objects.get(slug=slug) obtiene el objeto Meals que tiene el slug proporcionado y lo asigna a la variable meal_detail.
Se crea un diccionario context que contiene los detalles de la comida obtenidos.
La función render() toma la solicitud (request), la plantilla 'Meals/detail.html', y el contexto (context) y renderiza la plantilla con el contexto proporcionado, devolviendo la página HTML resultante como respuesta.
"""
