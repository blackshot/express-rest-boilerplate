## Express app boilerplate
Este repositorio tiene el boilerplate necesario para hacer deploy de una api rest con node usando controladores, anotaciones e inyectables.

## Comandos
* `npm run build`: transpilar typescript 
* `npm start`: iniciar servidor
* `npm run dev`: iniciar modo desarrollo con autoreload
* `npm run buildnstart`: transpilar e iniciar
# Estructura

## Controllers
en el directorio `controllers` puedes agregar las rutas de tu api
usando las anotaciones de [routing-controllers](https://github.com/typestack/routing-controllers#example-of-usage)

## Middlewares
en el directorio `middlewares` puedes agregar tus middlewares globales utilizando las anotaciones de [routing-controllers @Middleware](https://github.com/typestack/routing-controllers#global-middlewares)

---
El resto de directorios `model`, `repositories` y `services` no son estrictamente necesarias pero están ahí como ayuda para estructurar el proyecto segun las buenas prácticas, además cada uno tiene su alias `@directorio/` para usarlos de rutas de importación.

# Variables de entorno
puedes acceder a las variables escritas en el archivo `.env` mediante el objeto `process.env`

# Bugs conocidos
* Hay un problema con la inyección de dependencias debido a que la version `0.9+` de [typedi](https://github.com/typestack/typedi) no crea instancias de clases desconocidas, hay que decorar todos los controladores con `@Service()`, si no quieres hacer eso entonces debes remover completamente el paquete `typedi` y sacrificar la inyección de dependencias o implementar otro contenedor que habilite la inyección de dependencias tal como `inversify` agregando su adaptador correspondiente. mas info en: [https://github.com/typestack/routing-controllers#using-di-container](https://github.com/typestack/routing-controllers#using-di-container)

# Consejos
Este proyecto le viene bien usar `prisma` como ORM para conectarlo a cualquier base de datos.