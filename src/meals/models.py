from django.db import models
from django.utils.text import slugify
# Create your models here.
class Meals(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    people = models.IntegerField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    preparation_time = models.DecimalField(max_digits=5, decimal_places=2)
    imagen = models.ImageField(upload_to='meals/')
    slug = models.SlugField(blank=True, null=True)
    
    def save(self, *args, **kwargs):
        if not self.slug and self.name :
            self.slug = slugify(self.name)
        super(Meals, self).save(*args, **kwargs)

    class Meta:
        verbose_name='meal'
        verbose_name_plural='meals'
    

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=30)

    class Meta:
        verbose_name='category'
        verbose_name_plural='categories'
        
    def __str__(self):
        return self.name

"""
Importaciones:
from django.db import models: Importa la clase Model de Django, que es la base para definir modelos en Django.
from django.utils.text import slugify: Importa la función slugify de Django, que se utiliza para convertir cadenas de texto en slugs (es decir, versiones amigables para URL) al eliminar caracteres especiales y espacios y convertirlos en minúsculas.
Definición del modelo Meals:
class Meals(models.Model): Define una clase llamada Meals que hereda de models.Model, lo que indica que Meals es un modelo de Django.
Atributos del modelo:
name, description, people, price, preparation_time, imagen: Son campos del modelo Meals, cada uno representado por un tipo específico de campo de Django (por ejemplo, CharField, TextField, IntegerField, DecimalField, ImageField), que definen la estructura de datos de una comida.
slug: Es un campo SlugField que se utiliza para almacenar el slug de la comida. El campo slug es opcional (blank=True, null=True), lo que significa que puede estar vacío en la base de datos.
Método save:
Se define un método save personalizado para el modelo Meals. Este método se llama cada vez que se guarda una instancia del modelo en la base de datos.
Dentro del método save, se comprueba si el campo slug está vacío y si el campo name no está vacío. Si ambos son verdaderos, se genera un slug a partir del nombre de la comida utilizando la función slugify y se asigna al campo slug.
Luego, se llama al método save de la clase base (super(Meals, self).save(*args, **kwargs)) para guardar la instancia del modelo.
Clase Meta:
La clase Meta se utiliza para proporcionar metadatos adicionales al modelo.
verbose_name y verbose_name_plural: Define los nombres humanos legibles para el modelo en singular y plural, respectivamente.
Método __str__:
Se define un método __str__ para el modelo Meals, que devuelve una representación de cadena del objeto. En este caso, devuelve el nombre de la comida.
"""