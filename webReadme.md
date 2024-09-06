# Playwright Mobile QAConf

## Descripción del Proyecto

El proyecto `playwright-mobile-QAConf` es un conjunto de herramientas de automatización de pruebas diseñado para pagina web utilizando Playwright. Este proyecto tiene como objetivo agilizar y mejorar el proceso de pruebas, garantizando una robusta garantía de calidad.

## Características

- Pruebas automatizadas end-to-end.
- Utiliza Playwright, una potente biblioteca de automatización de navegadores.
- Soporta pruebas en múltiples navegadores.
- Altamente configurable y extensible para diversas necesidades de prueba.

## Comenzando

### Prerrequisitos

- **Node.js**: Asegúrate de tener Node.js instalado. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- **npm**: La instalación de Node.js incluye npm. Asegúrate de que esté actualizado.

### Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/Nitabo88/playwright-mobile-QAConf.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd playwright-mobile-QAConf
    ```

3. Instala las dependencias:
    ```sh
    npm install
    ```

### Configuración

El proyecto incluye un archivo de configuración que se debe configurar antes de ejecutar las pruebas. El archivo de configuración principal es `config.json`.

Aquí hay una breve descripción de la estructura de `config.json`:

```json
{
  "projectName": "playwright-mobile-QAConf",
  "browsers": ["chromium", "firefox", "webkit"],
  "baseUrl": "http://localhost:3000"
}
```

- `projectName`: Nombre del proyecto.
- `browsers`: Lista de navegadores en los que se ejecutarán las pruebas.
- `baseUrl`: URL base de la aplicación bajo prueba.

### Ejecutar las Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```sh
npx playwright test
```

Puedes especificar opciones adicionales según tus necesidades de prueba. Por ejemplo, para ejecutar pruebas en un navegador específico:

```sh
npx playwright test --project=chromium
```

### Estructura de Carpetas

- `tests/`: Contiene todos los archivos de prueba.
- `config.json`: Archivo de configuración principal del conjunto de pruebas.
- `package.json`: Información de metadatos y dependencias del proyecto.


## Contacto

Si tienes alguna pregunta o necesitas más asistencia, no dudes en contactarme en [linkedin](https://www.linkedin.com/in/licet-estrada-329708117/).

---

¡Gracias por asistir a QAConf Pereira! Esperamos que te ayude a lograr una prueba.
