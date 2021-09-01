# WebServer Api


# CoinGecko

### Este es un *BackEnd* que te permite realizar todas las funsionalidades de un *CRUD* 
El mismo cuenta con algunos endpoins donde podrar inicias sesion para realizar las operaciones necesarias
##
#### GET  http://localhost:5001/api/users  te mostrara los usuarios registrados
#### POST http://localhost:5001/api/users   crear usuarios 
#### PUT  http://localhost:5001/api/users/:id Actualizar el usuario y sus favoritos
#### DELETE  http://localhost:5001/api/users/:id Eliminar el usuario
#### POST http://localhost:5001/api/auth/login iniciar sesion en la plataforma con tu usuario y contraseña
#### GET  http://localhost:5001/api/coins Iniciara la petecion a las Cryptomonedas necesitaras user Authenticado

* Recuerden que deben ejecutar ```npm install``` para reconstruir los modulos de Node.

#### NOTA:
##
 Debes configuras tu archivo `.env `con las variables de entornos donde se incluiran el usuario y contraseña del clouster o tu base de datos local ademas del path de coneccion y la llave secreta que se necesita para generar los token de authenticacion, para mas informacion verifica el archivo `.example.env` donde encontraras ejemplo de las variables que necesitas