# 📋 Gestor de Tareas (CLI)

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Una aplicación de línea de comandos (CLI) moderna, modular y eficiente para la gestión de tareas personales, desarrollada con **Node.js**. Esta versión ha sido refactorizada para ofrecer una arquitectura escalable, persistencia de datos robusta e interfaz de usuario interactiva.

---

## ✨ Características Principales

- **Arquitectura Modular**: Implementación basada en ES Modules (ESM) para un código limpio y mantenible.
- **Interfaz Interactiva**: Experiencia de usuario mejorada mediante `inquirer`, eliminando la interacción basada solo en texto plano.
- **Persistencia de Datos**: Guardado y carga automática de tareas en formato JSON (`db/data.json`).
- **Gestión Robusta**: Uso de `uuid` para garantizar identificadores únicos para cada tarea.
- **Feedback Visual**: Interfaz colorida y legible gracias a `colors`.

---

## 🏗️ Estructura del Proyecto

```text
javascript-01-tareas/
├── db/             # Almacenamiento de datos (JSON)
├── helpers/        # Funciones auxiliares (Inquirer, persistencia)
├── models/         # Clases de negocio (Tarea, Tareas)
├── index.js        # Punto de entrada de la aplicación
├── package.json    # Configuración y dependencias
└── README.md       # Documentación
```

---

## 🚀 Instalación y Configuración

### Requisitos previos
- [Node.js](https://nodejs.org/) (versión 14 o superior recomendada).

### Pasos
1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/viptelcomunicaciones/javascript-01-tareas.git
   cd javascript-01-tareas
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

---

## 💻 Uso

Para iniciar el gestor de tareas, ejecuta el siguiente comando en la terminal:

```bash
node index.js
```

Sigue las instrucciones en pantalla para navegar por el menú interactivo y gestionar tus tareas (crear, listar, completar, borrar).

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar esta herramienta, siéntete libre de hacer un *fork* del repositorio y enviar un *pull request*.

---

## 📄 Licencia

Este proyecto está bajo la licencia [ISC](https://opensource.org/licenses/ISC).
