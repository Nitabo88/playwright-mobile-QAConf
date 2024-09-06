# Proyecto de Pruebas Móviles con Playwright

Este proyecto demuestra cómo configurar y ejecutar pruebas end-to-end utilizando Playwright para dispositivos móviles.

## Tabla de Contenidos
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración](#configuración)
- [Ejecutar Pruebas](#ejecutar-pruebas)
- [Escribir Pruebas](#escribir-pruebas)
- [Depurar Pruebas](#depurar-pruebas)
- [Recursos](#recursos)

## Requisitos Previos

Asegúrate de tener lo siguiente instalado:
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/)

## Instalación

1. **Clonar el Repositorio:**
   ```sh
   git clone https://github.com/Nitabo88/playwright-mobile-testing.git
   cd playwright-mobile-testing
   ```

2. **Instalar Dependencias:**
   ```sh
   npm install
   ```

3. **Instalar Navegadores de Playwright:**
   ```sh
   npx playwright install
   ```

## Estructura del Proyecto
```
/playwright-mobile-testing
│
├── /src
│   ├── /pages
│   │   ├── base-page.ts
│   │   └── login-page.ts
│   ├── /tests
│   │   └── login.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
```

## Configuración

### Configuración de Playwright

Edita el archivo `playwright.config.ts` para configurar dispositivos móviles:

```ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
  timeout: 60000,
  retries: 1,
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
  },
  reporter: [['list'], ['json', { outputFile: 'results.json' }]],
};

export default config;
```

## Ejecutar Pruebas

Para ejecutar tus pruebas, usa el siguiente comando:

```sh
npx playwright test
```

También puedes especificar el proyecto para dispositivos móviles:

```sh
npx playwright test --project="Mobile Chrome"
npx playwright test --project="Mobile Safari"
```

## Escribir Pruebas

Crea tus pruebas en el directorio `src/tests`. A continuación, se muestra un ejemplo de un archivo de prueba para dispositivos móviles:

```ts
import { test, expect } from '@playwright/test';

test('prueba de inicio de sesión móvil', async ({ page }) => {
  await page.goto('https://ejemplo.com/login');
  await page.fill('#username', 'usuario');
  await page.fill('#password', 'contraseña');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('https://ejemplo.com/dashboard');
});
```

## Depurar Pruebas

Para depurar pruebas, puedes ejecutarlas en modo con interfaz gráfica (headed mode) usando:

```sh
npx playwright test --headed
```

Para una depuración más avanzada, usa el Inspector de Playwright:

```sh
npx playwright test --debug
```

## Recursos

- [Documentación de Playwright](https://playwright.dev/docs/intro)
- [Repositorio de GitHub de Playwright](https://github.com/microsoft/playwright)
- [Runner de Pruebas de Playwright](https://playwright.dev/docs/running-tests)

---

¡Felices Pruebas, Gracias Por Paticipar en QAConf Pereira!

Contacteme en [linkedin](https://www.linkedin.com/in/licet-estrada-329708117/)
