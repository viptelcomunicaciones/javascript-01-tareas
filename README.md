# Gestor de Tareas (CLI) - JavaScript

Una versión refactorizada y modular de un gestor de tareas basado en CLI, utilizando Node.js, `inquirer` para la interfaz interactiva, y persistencia en JSON.

## Características
- **Arquitectura Modular**: Basado en ES Modules (ESM).
- **Interfaz Interactiva**: Menús y prompts mejorados con `inquirer`.
- **Persistencia de datos**: Guarda las tareas localmente en `db/data.json`.
- **Identificadores Únicos**: Generación de IDs mediante `uuid`.
- **Formateo de texto**: Uso de `colors` para una experiencia visual clara en consola.

## Requisitos
- Node.js instalado.

## Instalación
1. Clona el repositorio:
   `git clone https://github.com/viptelcomunicaciones/javascript-01-tareas.git`
2. Instala las dependencias:
   `npm install`

## Uso
Ejecuta la aplicación con:
`node index.js`
