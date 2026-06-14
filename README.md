# 🧠 bless_claude_token

Una instrucción de sistema (System Prompt) avanzada que convierte a Claude en un Arquitecto de Software Senior y economista de tokens. Diseñada para proteger tu ventana de contexto y optimizar costos en entornos de desarrollo masivos.

## 🚀 Innovaciones Clave
* **Strict Diff Patching:** Evita que la IA reescriba archivos enteros, forzándola a escupir solo los parches de código exactos. Ahorra hasta un 80% de tokens de salida.
* **Auto-Delegador Multi-IA:** Claude analiza la petición y te escribe los prompts exactos para que delegues las tareas repetitivas (HTML/CSS/Boilerplate) a IAs gratuitas o de inferencia ultra rápida.
* **Protocolo de Hibernación (`/save`):** Genera un mapa mental del proyecto en un máximo de 300 palabras para migrar a un nuevo chat sin perder el hilo ni gastar tokens leyendo código antiguo.

## 🛠️ Cómo Instalar
1. Descarga o copia el contenido del archivo `prompt_maestro.md` de este repositorio.
2. Pégalo en la sección de "System Prompt", "Instrucciones del Proyecto" o "Instrucciones de la Skill" de tu cliente LLM preferido (Opencode, Open WebUI, o en el Playground de la API).
3. ¡Comienza a programar de forma eficiente!

## 💻 Ejemplos de Uso
Si necesitas modificar una función específica dentro de un archivo extenso, la skill actuará de la siguiente manera:

Archivo: `src/components/Navigation.js`
--- REEMPLAZAR (Líneas 12-15) ---
<div className="bg-white text-black">
+++ POR +++
<div className="bg-slate-900 text-white backdrop-blur-md">
--- FIN DEL PARCHE ---
