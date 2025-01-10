---
id: "C-RestFramework"
title: Django Rest Framework
subtitle: Creación de una API REST con Django Rest Framework
url: /chapters/c-restframework/
nextUrl: /chapters/create-model/
date: 2025-01-09
---

Django Rest Framework es una biblioteca de Django que permite crear APIs REST de forma sencilla y rápida. En este capítulo, se mostrará cómo crear una API REST con Django Rest Framework.

## Instalación de Django Rest Framework

Para instalar Django Rest Framework, se debe ejecutar el siguiente comando:

```bash
pip install djangorestframework
```

Una vez instalado Django Rest Framework, se debe agregar la aplicación `rest_framework` al archivo `INSTALLED_APPS` del archivo `settings.py` del proyecto Django. Para ello, se debe agregar la siguiente línea en el archivo `settings.py`:

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```

## CORS (Cross-Origin Resource Sharing)

Para permitir que la API REST sea accesible desde un dominio diferente al del servidor, se debe instalar la biblioteca `django-cors-headers`. Para instalar `django-cors-headers`, se debe ejecutar el siguiente comando:

```bash
pip install django-cors-headers
```

Una vez instalado `django-cors-headers`, se debe agregar la aplicación `corsheaders` al archivo `INSTALLED_APPS` del archivo `settings.py` del proyecto Django. Para ello, se debe agregar la siguiente línea en el archivo `settings.py`:

```python
INSTALLED_APPS = [
    ...
    'corsheaders',
]
```

Además, se debe agregar el middleware `CorsMiddleware` al archivo `MIDDLEWARE` del archivo `settings.py`. Para ello, se debe agregar la siguiente línea en el archivo `settings.py`:

```python
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]
```
Recuarda que el middleware `CorsMiddleware` debe estar antes del middleware `CommonMiddleware`. Esto es importante para que el middleware `CorsMiddleware` se ejecute antes que el middleware `CommonMiddleware`.

Finalmente, se debe configurar el archivo `settings.py` para permitir el acceso a la API REST desde un dominio diferente al del servidor. Para ello, se debe agregar la siguiente configuración en el archivo `settings.py`:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:5173",
]
```

En este caso, se permite el acceso a la API REST desde los dominios `http://localhost:3000` y `http://localhost:5173`. Se pueden agregar más dominios según sea necesario.

Con esta configuración, se permite el acceso a la API REST desde un dominio diferente al del servidor.