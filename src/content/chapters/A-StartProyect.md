---
id: "A-StartProyect"
title: Configuración del proyecto
subtitle: Intaleción de dependencias y configuración del proyecto Django
url: /chapters/a-startproyect/
nextUrl: /chapters/b-startapp
date: 2025-01-03
---

Aunque esta de más decirlo, Django es un framework desarrollado en Python, por lo que es necesario tener instalado Python en el sistema. Para instalar Django es recoemdable utilizar un entorno virtual, para ello se debe ejecutar el siguiente comando:

```bash
python -m venv [nombre_entorno]
```
para este ejemplo y comunmente se utiliza el nombre `venv` para el entorno virtual, por lo que el comando sería:

```bash
python -m venv venv
```

Una vez creado el entorno virtual, se debe activar el entorno virtual (en Windows) con el siguiente comando:

```bash
venv\Scripts\activate
```

En sistemas operativos basados en Unix (Linux y MacOS) el comando es el siguiente:

```bash
source venv/bin/activate
```

## Instalación de Django

Una vez activado el entorno virtual, se debe instalar Django con el siguiente comando:

```bash
pip install django
```

Para verificar que Django se ha instalado correctamente, se puede ejecutar el siguiente comando:

```bash
django-admin --version
```

## Creación de un proyecto Django

Una vez instalado Django, se puede crear un proyecto Django con el siguiente comando:

```bash
django-admin startproject [nombre_proyecto]
```

Para este ejemplo, el nombre del proyecto será `project_crud_api`, por lo que el comando sería:

```bash
django-admin startproject project_crud_api .
```

El punto al final del comando indica que el proyecto se creará en el directorio actual. Además de crear el proyecto, se creará un archivo `manage.py` que se utiliza para administrar el proyecto Django.

Dentro del proyecto se creará un directorio con el mismo nombre del proyecto, en este caso `project_crud_api`, que contendrá los archivos y directorios necesarios para el proyecto Django.

### Estructura del proyecto

La estructura del proyecto Django es la siguiente:

```bash
project_crud_api/
├── manage.py
└── project_crud_api/
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

- `manage.py`: Es un script que ayuda con la administración del proyecto Django.
- `project_crud_api/`: Es un directorio que contiene el proyecto Django.
    - `__init__.py`: Es un archivo que indica que el directorio es un paquete de Python.
    - `asgi.py`: Es un punto de entrada para servidores web compatibles con ASGI.
    - `settings.py`: Contiene la configuración del proyecto.
    - `urls.py`: Contiene las definiciones de las URL del proyecto.
    - `wsgi.py`: Es un punto de entrada para servidores web compatibles con WSGI.

Para ejecutar el proyecto Django, se debe ejecutar el siguiente comando:

```bash
python manage.py runserver
```