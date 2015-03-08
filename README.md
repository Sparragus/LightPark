# LightPark

## Descripción
LightPark, la app que te ayuda a encontrar estacionamiento más rápido sin pagar de más. No pierdas tiempo ni dinero en aparcar.

## Dependencias
LightPark usa Node.js, MongoDB como base de datos y varias bibliotecas de código de NPM.

### MongoDB
Para instalar MongoDB necesitar el manejador de paquete _brew_. Luego que lo tengas instalado, puede usar el comando `brew install mongodb` para obtener MongoDB.

### Modulos de Node,js
Puedes instalar todos los paquetes necesarios usando NPM.

`npm install`

## Configuración
Para correr uns instancia de LightPark no necesitas ninguna variable de entorno local.

## Despliegue
LightPark está listo para la nube. La forma más fácil es usando Heroku. Crea una cuenta en heroku.com e instala las herramientas de la consola de comando, heroku-cli.

  1. `git clone https://github.com/Sparragus/LightPark.git`
  2. `cd lightpark`
  3. `heroku create`
  4. `heroku addons:add mongolab`
  5. `git push heroku master`
  6. `heroku open`

