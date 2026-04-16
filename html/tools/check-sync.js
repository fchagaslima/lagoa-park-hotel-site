// Hook: avisa quando PROJETO.md ou CLAUDE.md e editado
// para lembrar de manter os dois sincronizados
let d = '';
process.stdin.on('data', c => d += c);
process.stdin.on('end', () => {
  const j = JSON.parse(d);
  const f = (j.tool_input && j.tool_input.file_path)
         || (j.tool_response && j.tool_response.filePath)
         || '';
  const match = /lagoa-park-hotel-site[\\/](PROJETO|CLAUDE)\.md$/i.test(f);
  if (match) {
    console.log(JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PostToolUse',
        additionalContext: 'PROJETO.md ou CLAUDE.md foi editado — verificar se o outro arquivo precisa ser atualizado para manter sincronia (stack, tooling, pendencias).'
      }
    }));
  }
});
