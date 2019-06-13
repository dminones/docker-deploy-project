# Heroku Deploy Test Project

Este proyecto permite deployar a heroku una app nodejs en dos formas distintas. Como app node y dentro de un container docker.
La intencion es que lo puedan usar para hacer deploys a heroku y para tener como referencia.

## Como usar este repo

Para usar este repositorio la forma mas simple y recomendada es hacer un fork y deployar el fork a heroku. De esta forma pueden hacer cambios y probar cosas nuevas.

### Hacer un fork
Apretando arriba a la derecha el boton fork en github

### Deployar a heroku

* Crear una cuenta en [heroku](https://www.heroku.com/) 
* Crear una app nueva en heroku
* En la pestaña deploy asociar el repo recien forkeado, marcar como deploy automatico

Con estos pasos cada cambio que hagan deberia disparar un nuevo deploy en heroku y en la url de la app (boton open app) deberian poder vere la applicacion.
