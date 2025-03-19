# Aromas Viña

Bienvenido al repositorio de **Aromas Viña**, una aplicación web diseñada para la compra de vinos exclusivos.

## Requisitos Previos

Antes de comenzar con la instalación, asegúrate de tener instalados los siguientes componentes en tu sistema:

- **Node.js** (v16 o superior)
- **npm** (v8 o superior) o **Yarn** (v1.22 o superior)
- **Git** (para clonar el repositorio)
- **Base de datos** (MySQL, PostgreSQL, MongoDB, etc., dependiendo de lo que use tu aplicación)

## Instalación

Sigue estos pasos para instalar y configurar la aplicación en tu entorno local.

### 1. Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/Manuelloira/Aromas-Vina.git
cd Aromas-Vina
npm install
# o
yarn install

Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias. Puedes usar el archivo .env.example como plantilla:
cp .env.example .env

Edita el archivo .env y proporciona los valores adecuados para cada variable. Por ejemplo:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=aromas_vina
JWT_SECRET=your_jwt_secret

Asegúrate de que tu base de datos esté configurada y en ejecución. Luego, ejecuta las migraciones para crear las tablas necesarias:

npm run migrate
# o
yarn migrate

Una vez que todo esté configurado, puedes iniciar la aplicación:

npm start
# o
yarn start

Si estás trabajando en modo de desarrollo, puedes usar:

npm run dev
# o
yarn dev

Para ejecutar las pruebas unitarias, usa:

npm test
# o
yarn test

Aromas-Vina/
├── src/                  # Código fuente de la aplicación
│   ├── models/           # Modelos de la base de datos
│   ├── services/         # Lógica de negocio
│   └── utils/            # Utilidades y helpers
├── migrations/           # Archivos de migración de la base de datos
├── tests/                # Pruebas unitarias y de integración
├── .env.example          # Plantilla de variables de entorno
├── .gitignore            # Archivos y carpetas ignorados por Git
├── package.json          # Dependencias y scripts de npm
└── README.md             # Este archivo

Si deseas contribuir al proyecto, por favor sigue estos pasos:

Haz un fork del repositorio.

Crea una rama para tu feature (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').

Haz push a la rama (git push origin feature/nueva-funcionalidad).

Abre un Pull Request.


Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

Nombre: Manuel Loira Vázquez

Email: manuel.loirav@gmail.com

GitHub: Manuelloira
