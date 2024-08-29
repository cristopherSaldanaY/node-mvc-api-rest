# Node.js TypeScript MVC Application

## Descripción

Esta es una aplicación backend básica utilizando Node.js, TypeScript y el patrón de diseño MVC. El propósito de este proyecto es demostrar el conocimiento en la creación de aplicaciones backend estructuradas y bien organizadas.

## Características

- CRUD de usuarios con validación utilizando DTOs.
- Documentación automática de la API con Swagger.
- Gestión de errores centralizada.
- Integración con MySQL utilizando TypeORM.
- Logging con Winston.
- Configuración y datos de seed para facilitar el desarrollo y pruebas.

## Estructura del Proyecto

├── .dockerignore
├── .editorconfig
├── .env
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── docker-compose.yml
├── nodemon.json
├── src
│ ├── config
│ │ ├── ormconfig.ts
│ │ └── swaggerConfig.ts
│ ├── controllers
│ │ └── userController.ts
│ ├── dtos
│ │ ├── userDto.ts
│ │ └── userResponseDto.ts
│ ├── middlewares
│ │ └── errorHandler.ts
│ ├── models
│ │ └── User.ts
│ ├── repositories
│ │ └── userRepository.ts
│ ├── routes
│ │ └── user.ts
│ ├── seed
│ │ └── seedData.ts
│ ├── services
│ │ └── userService.ts
│ ├── utils
│ │ └── logger.ts
│ ├── app.ts
│ ├── index.ts
│ └── swagger.ts


## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/nombre-repo.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd nombre-repo
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```
4. Crea un archivo `.env` con las variables de entorno necesarias (puedes basarte en `.env.example`).

5. Inicia los contenedores Docker:
    ```sh
    docker-compose up -d
    ```

## Uso

1. Para iniciar la aplicación en modo de desarrollo:
    ```sh
    npm run dev
    ```

2. Para iniciar la aplicación en modo de producción:
    ```sh
    npm start
    ```

## Endpoints

Puedes ver y probar los endpoints de la API utilizando Swagger. Después de iniciar la aplicación, abre tu navegador y navega a `http://localhost:3000/api-docs`.

### Usuarios

- **Crear Usuario**
  ```http
  POST /users
{
  "name": "Cristopher",
  "email": "cristopher.saldanay@gmail.com"
}

