// eslint.config.js
import { ESLint } from 'eslint';

export default [
  {
    root: true, // Define que ESLint debe trabajar en la carpeta raíz del proyecto
    plugins: ['@typescript-eslint'], // Define los plugins, en este caso para TypeScript
    parser: '@typescript-eslint/parser', // Define el parser específico para TypeScript
    extends: [
      'eslint:recommended', // Configuración recomendada de ESLint
      'plugin:@typescript-eslint/eslint-recommended', // Reglas recomendadas para TypeScript
      'plugin:@typescript-eslint/recommended', // Reglas adicionales para TypeScript
    ],
    rules: {
      quotes: ['error', 'single'], // Fuerza el uso de comillas simples
      '@typescript-eslint/no-explicit-any': ['warn'], // Lanza una advertencia si se usa 'any'
      curly: 'error', // Requiere llaves {} en las estructuras de control
      'no-empty': 'error', // No permite bloques vacíos
      '@typescript-eslint/no-var-requires': 'off', // Desactiva la regla que obliga a usar 'var' con require
      'no-undef': 'off', // Desactiva la regla que marca como error las importaciones no utilizadas
    },
  },
];
