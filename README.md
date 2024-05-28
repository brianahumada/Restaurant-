# Restaurant-
Restaurante web.
# Restaurante Django

## Descripción

Este es un proyecto de gestión de restaurantes construido con Django. Permite gestionar reservas, menús, pedidos y mucho más.

## Características

- Gestión de menús: creación, edición y eliminación de elementos del menú.
- Gestión de reservas: clientes pueden hacer reservas en línea.
- Gestión de pedidos: seguimiento de pedidos en tiempo real.
- Autenticación de usuarios: registro e inicio de sesión de clientes y personal.
- Interfaz de administración: administración completa del restaurante.

## Tecnologías

- [Django](https://www.djangoproject.com/): Framework web para el backend.
- [SQLite](https://www.sqlite.org/index.html): Base de datos ligera para el desarrollo.
- [Bootstrap](https://getbootstrap.com/): Framework CSS para el diseño frontend.
- [JavaScript](https://www.javascript.com/): Interactividad en el frontend.

## Instalación

### Requisitos

- Python 3.x
- pip
- virtualenv (opcional pero recomendado)

### Pasos para la instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/usuario/restaurante-django.git
    cd restaurante-django
    ```

2. Crea un entorno virtual:

    ```bash
    python -m venv venv
    source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
    ```

3. Instala las dependencias:

    ```bash
    pip install -r requirements.txt
    ```

4. Realiza las migraciones:

    ```bash
    python manage.py migrate
    ```

5. Crea un superusuario para acceder al panel de administración:

    ```bash
    python manage.py createsuperuser
    ```

6. Ejecuta el servidor de desarrollo:

    ```bash
    python manage.py runserver
    ```

7. Accede a la aplicación en tu navegador:

    ```
    http://127.0.0.1:8000/means/
    ```

## Uso

### Acceso a la administración

Accede al panel de administración para gestionar el restaurante:
http://127.0.0.1:8000/admin/


Inicia sesión con las credenciales de superusuario que creaste anteriormente.

### Gestión de Menús

- Añadir, editar y eliminar elementos del menú.
- Organizar el menú en categorías.

### Gestión de Reservas

- Visualizar reservas existentes.
- Añadir, editar y eliminar reservas.

### Gestión de Pedidos

- Seguimiento de pedidos en tiempo real.
- Actualizar el estado de los pedidos.

## Contribución

¡Las contribuciones son bienvenidas! Sigue estos pasos para contribuir:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añade nueva característica'`).
4. Empuja la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarnos en:

- Email: ahumada.yayan@gmail.com
- GitHub: [https://github.com/brianahumada](https://github.com/brianahumada)

