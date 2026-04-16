@echo off
REM ============================================================
REM  Lagoa Park Hotel — Modo desenvolvimento
REM  Gera styles.css automaticamente a cada alteracao nos HTMLs
REM  Mantenha esta janela aberta enquanto trabalha no site
REM ============================================================

cd /d "%~dp0"
echo.
echo  Lagoa Park Hotel — Tailwind em modo watch
echo  Editando HTML? O styles.css atualiza sozinho.
echo  Feche esta janela para parar.
echo.
tools\tailwindcss.exe -i src/input.css -o dist/styles.css --watch
