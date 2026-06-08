# Customer Lifecycle API

Backend Node.js + Express para registrar y consultar clientes, con configuración por ambiente DEV y PROD.

## Despliegues Render y Docker

* DEV: https://customers-api-dev.onrender.com
* PROD: https://customers-api-prod.onrender.com

* Docker: https://hub.docker.com/repository/docker/leninecm/customers-api


## Endpoints

```http
GET /health
GET /api/customers
POST /api/customers
```

Body para crear cliente:

```json
{
  "name": "Juan Perez",
  "email": "juan@email.com"
}
```

## Ejecutar local

Instalar dependencias:

```bash
npm install
```

Ejecutar en DEV:

```bash
npm run start:dev
```

Ejecutar en PROD:

```bash
npm run start:prod
```

### Construir imagen local

```bash
docker build -t customers-api .
```

Ejecutar DEV con imagen local:

```bash
docker run --rm -p 8080:8080 --env-file .env.dev customers-api
```

Ejecutar PROD con imagen local:

```bash
docker run --rm -p 9090:9090 --env-file .env.prod customers-api
```
## Docker usando imagen remota

```bash
docker build -t leninecm/customers-api:v1 .
```

Ejecutar DEV con Docker:

```bash
docker run --rm -p 8080:8080 --env-file .env.dev leninecm/customers-api:v1
```

Ejecutar PROD con Docker:

```bash
docker run --rm -p 9090:9090 --env-file .env.prod leninecm/customers-api:v1
```

## Docker Compose 

Ejecutar DEV:

```bash
docker compose up --build customers-api-dev
```

Ejecutar PROD:

```bash
docker compose up --build customers-api-prod
```

## Ambientes

La aplicación usa variables de entorno para cambiar su comportamiento entre DEV y PROD, como nombre de aplicación, mensaje de ejecución y cambiando el puerto.
