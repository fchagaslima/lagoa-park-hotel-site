# Tailwind CLI standalone

O executavel `tailwindcss.exe` nao esta no git (123MB — ignorado pelo `.gitignore`).

## Como baixar

Via PowerShell, na raiz do projeto:

```powershell
curl -L -o html/tools/tailwindcss.exe `
  "https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe"
```

Depois:

1. Dev: duplo clique em `html/dev.bat` (gera `dist/styles.css` e fica observando)
2. Build producao: duplo clique em `html/build.bat` (gera CSS minificado)
