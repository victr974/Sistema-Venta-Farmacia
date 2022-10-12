# Sistema-Venta-Farmacia
Proyecto del curso de desarrollo web 
-- A continuation inicializamos la aplicacion Node.js con un archivo de package.json
 npm init
--Luego intalar los modulos necesarios
npm install express sequelize pg pg-hstore body-parser cors --save

--A veces ejecutar cada rato suele ser tedioso entonces vamos intalar una dependencias

npm i nodemon -D

---- Para hecho solo ejecutamos npx nodemon server.js

pero como el comando esta largo, tambien se puede resumirlo utlizando el scrip de  package.json

Por ello solo ejecutar el comando --- npm run dev ---

Login
La autenticación basaba en token con JWT (JSONWebToken)
Lo sabras
- Flujo apropiado para el registro de usuario e inicio de sesión con autenticación JWT
