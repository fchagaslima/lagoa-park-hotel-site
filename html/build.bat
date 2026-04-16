@echo off
REM ============================================================
REM  Lagoa Park Hotel — Build de producao
REM  Gera styles.css minificado, pronto para publicar
REM ============================================================

cd /d "%~dp0"
echo.
echo  Gerando styles.css minificado...
tools\tailwindcss.exe -i src/input.css -o dist/styles.css --minify
echo.
echo  Pronto. Copie os arquivos de html\ para o XAMPP.
echo.
pause
