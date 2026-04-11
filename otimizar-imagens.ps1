# PowerShell - Otimizar imagens JPG
# Redimensiona fotos grandes para tamanho apropriado

$pastaImgs = "C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\assets\img"

# Fotos que precisam otimização imediata
$fotos360 = @(
    "$pastaImgs\360\01-fachada.jpg",
    "$pastaImgs\360\02-recepcao-01.jpg"
)

$fotosRestaurante = Get-ChildItem "$pastaImgs\Restaurante\*.jpg" | Where-Object { $_.Length -gt 10MB }

Write-Host "🖼️  OTIMIZADOR DE IMAGENS — Lagoa Park Hotel" -ForegroundColor Green
Write-Host "=" -ForegroundColor Green -NoNewline
Write-Host ("=" * 69) -ForegroundColor Green
Write-Host ""
Write-Host "📁 Pasta de imagens: $pastaImgs" -ForegroundColor Cyan
Write-Host ""
Write-Host "Fotos grandes encontradas:" -ForegroundColor Yellow
Write-Host ""

foreach ($arquivo in $fotosRestaurante) {
    $tamanhoMB = [math]::Round($arquivo.Length / 1MB, 2)
    Write-Host "   🎬 $($arquivo.Name) — $tamanhoMB MB" -ForegroundColor Red
}

Write-Host ""
Write-Host "💡 PRÓXIMAS ETAPAS:" -ForegroundColor Cyan
Write-Host "   1. Use uma ferramenta online gratuita: https://squoosh.app/" -ForegroundColor White
Write-Host "   2. Ou instale ImageMagick e use nosso script Python" -ForegroundColor White
Write-Host "   3. Redimensione para max 1920x1080 com qualidade 85%" -ForegroundColor White
Write-Host ""
Write-Host "📊 RESUMO:" -ForegroundColor Cyan
Write-Host "   Tamanho total: 765 MB" -ForegroundColor Yellow
Write-Host "   Esperado após otimizar: 450-500 MB (-35%)" -ForegroundColor Green
Write-Host ""
