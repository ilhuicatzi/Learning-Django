---
id: chapter1
title: Configuración del proyecto
subtitle: Intaleción de dependencias y configuración del proyecto Django
url: /chapters/start-proyect/
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

Una vez activado el entorno virtual, se debe instalar Django con el siguiente comando:

```bash
pip install django
```

Para verificar que Django se ha instalado correctamente, se puede ejecutar el siguiente comando:

```bash
django-admin --version
```
