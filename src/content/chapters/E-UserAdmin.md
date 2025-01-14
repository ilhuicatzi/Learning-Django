---
id: "E-UserAdmin"
title: Creación de usuarios y administración
subtitle: Creación de usuarios y administración en Django
url: /chapters/e-useradmin/
nextUrl: /chapters/f-viewsurls/
date: 2025-01-13
---

Una vez creada la aplicación Django y los modelos de la aplicación, se pueden crear usuarios y administrarlos a través del panel de administración de Django. Django proporciona una interfaz de administración incorporada que permite gestionar los usuarios, grupos y permisos de forma sencilla.

## Creación de usuarios

Para crear un usuario en Django, se puede utilizar el comando `createsuperuser` proporcionado por Django. Este comando crea un superusuario que puede acceder al panel de administración y realizar operaciones de administración. Para crear un superusuario, se ejecuta el siguiente comando:

```bash
python manage.py createsuperuser
```

A continuación, se solicitará ingresar un nombre de usuario, una dirección de correo electrónico y una contraseña para el superusuario. Una vez ingresados los datos, el superusuario se creará y se podrá acceder al panel de administración.


## Acceso al panel de administración

Para acceder al panel de administración de Django, se debe iniciar el servidor de desarrollo con el siguiente comando:

```bash
python manage.py runserver
```
