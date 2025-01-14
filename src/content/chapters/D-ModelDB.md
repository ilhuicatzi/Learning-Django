---
id: "D-ModelDB"
title: Creación de modelos y base de datos
subtitle: Creación de modelos y base de datos en Django
url: /chapters/d-modeldb/
nextUrl: /chapters/e-useradmin/
date: 2025-01-09
---

Una vez creada la aplicación Django, se pueden crear los modelos de la aplicación. Los modelos son clases de Python que representan tablas en la base de datos. Django proporciona una API para interactuar con la base de datos a través de los modelos.

## Creación de modelos

Para crear un modelo en Django, se debe crear una clase que herede de la clase `models.Model`. Cada atributo de la clase representa un campo en la tabla de la base de datos. Por ejemplo, para crear un modelo de una tarea, se puede crear una clase llamada `Task` en el archivo `models.py` de la aplicación `tasks`:

```python
from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    complete = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
```

En este ejemplo, se creó un modelo `Task` con los siguientes campos:

- `title`: Campo de tipo `CharField` con una longitud máxima de 200 caracteres.
- `description`: Campo de tipo `TextField` que puede estar en blanco.
- `complete`: Campo de tipo `BooleanField` con un valor predeterminado de `False`.
- `created_at`: Campo de tipo `DateTimeField` que se establece automáticamente con la fecha y hora de creación.
- `updated_at`: Campo de tipo `DateTimeField` que se actualiza automáticamente con la fecha y hora de la última actualización.
- `__str__`: Método que devuelve el título de la tarea como representación de cadena del objeto.

## Migraciones

Una vez creados los modelos, se deben aplicar las migraciones para crear las tablas correspondientes en la base de datos. Para ello, se ejecuta el siguiente comando:

```bash
python manage.py makemigrations [nombre_aplicacion]
```

Por ejemplo, para aplicar las migraciones de la aplicación `tasks`, se ejecuta el siguiente comando:

```bash
python manage.py makemigrations tasks
```

Este comando generará un archivo de migración en la carpeta `migrations` de la aplicación. Para aplicar las migraciones y crear las tablas en la base de datos, se ejecuta el siguiente comando:

```bash
python manage.py migrate [nombre_aplicacion]
```

Por ejemplo, para aplicar las migraciones de la aplicación `tasks`, se ejecuta el siguiente comando:

```bash
python manage.py migrate tasks
```

Esto creará las tablas correspondientes en la base de datos y permitirá interactuar con los modelos a través de la API de Django.

