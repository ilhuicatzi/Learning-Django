---
id: "B-StartApp"
title: Creación de la aplicación
subtitle: Creación de la aplicación Django para operaciones CRUD 
url: /chapters/b-startapp/
nextUrl: /chapters/c-restframework/
date: 2025-01-08
---

Una vez creado el proyecto Django, se puede crear una aplicación Django con el siguiente comando:

```bash
python manage.py startapp [nombre_aplicacion]
```

Por ejemplo, para crear una aplicación llamada `tasks`, se ejecuta el siguiente comando:

```bash
python manage.py startapp tasks
```
Esto creará una carpeta llamada `tasks` en el directorio `src` del proyecto Django. La estructura de la carpeta `tasks` es la siguiente:

```bash
tasks/
    migrations/
        __init__.py
    __init__.py
    admin.py
    apps.py
    models.py
    tests.py
    views.py
```

## Agrergar la aplicación al proyecto

Para que la aplicación sea reconocida por el proyecto Django, se debe agregar la aplicación al archivo `settings.py` del proyecto. Para ello, se debe agregar el nombre de la aplicación en la lista `INSTALLED_APPS` del archivo `settings.py`. Por ejemplo, para agregar la aplicación `tasks` al proyecto, se debe agregar la siguiente línea en el archivo `settings.py`:

```python
INSTALLED_APPS = [
    ...
    'tasks',
]
```
Una vez agregada la aplicación al archivo `settings.py`, se debe ejecutar el siguiente comando para aplicar los cambios:

```bash
python manage.py migrate
```
Esto creará las tablas necesarias para la aplicación en la base de datos y evitar errores al ejecutar la aplicación. Así finaliza la creación de la aplicación Django ahora procedemos a ejecutar la aplicación.

```bash
python manage.py runserver
```
