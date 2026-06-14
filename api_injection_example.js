// Ejemplo de inyección del "bless_claude_token" en un entorno Node.js / Backend
// Ideal para automatizaciones, bots o extensiones.

const fs = require('fs');
const { Anthropic } = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function main() {
  // 1. Cargamos tu Skill maestra desde el archivo local
  const systemPrompt = fs.readFileSync('prompt_maestro.md', 'utf8');

  // 2. Inyectamos la directiva en la configuración del modelo
  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 4000,
    temperature: 0.2, // Temperatura baja para respuestas técnicas estrictas
    system: systemPrompt, // <-- Aquí entra la magia del Token Economist
    messages: [
      {
        role: "user",
        content: "Necesito crear la estructura base para mi nuevo proyecto."
      }
    ]
  });

  console.log(msg.content);
}

main();
