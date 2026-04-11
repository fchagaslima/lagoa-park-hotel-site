#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para otimizar imagens JPG/PNG para WebP
Reduz tamanho em ~30-40% mantendo qualidade visual
"""

import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("❌ Erro: Pillow não está instalado.")
    print("📦 Instale com: pip install Pillow")
    sys.exit(1)

# Configurações
PASTA_IMGS = r"C:\Users\lenovo\OneDrive\ClaudeCode\lagoa-park-hotel-site\assets\img"
QUALIDADE_WEBP = 85  # 0-100 (85 é um bom balanço)
SOBRESCREVER = False  # Se True, apaga JPEG original

def obter_tamanho_mb(caminho):
    """Retorna tamanho do arquivo em MB"""
    return round(os.path.getsize(caminho) / 1024 / 1024, 2)

def otimizar_imagem(caminho_original):
    """Converte JPG/PNG para WebP otimizado"""
    try:
        caminho = Path(caminho_original)

        # Pular se já é WebP
        if caminho.suffix.lower() == '.webp':
            return None

        # Abrir imagem
        img = Image.open(caminho)

        # Converter RGBA para RGB se necessário (WebP)
        if img.mode in ('RGBA', 'LA', 'P'):
            fundo = Image.new('RGB', img.size, (255, 255, 255))
            fundo.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = fundo

        # Salvar como WebP
        caminho_webp = caminho.with_suffix('.webp')
        img.save(caminho_webp, 'WebP', quality=QUALIDADE_WEBP, method=6)

        tamanho_original = obter_tamanho_mb(caminho)
        tamanho_novo = obter_tamanho_mb(caminho_webp)
        reducao = round((1 - tamanho_novo / tamanho_original) * 100, 1)

        print(f"✅ {caminho.name}")
        print(f"   Original: {tamanho_original}MB → WebP: {tamanho_novo}MB ({reducao}% menor)")

        # Opcionalmente deletar original
        if SOBRESCREVER:
            caminho.unlink()
            print(f"   🗑️  Original deletado")

        return {
            'original': tamanho_original,
            'novo': tamanho_novo,
            'reducao_mb': tamanho_original - tamanho_novo
        }

    except Exception as e:
        print(f"❌ Erro ao processar {caminho}: {e}")
        return None

def main():
    print("=" * 70)
    print("🖼️  OTIMIZADOR DE IMAGENS — Lagoa Park Hotel")
    print("=" * 70)
    print(f"\n📁 Pasta: {PASTA_IMGS}")
    print(f"⚙️  Qualidade WebP: {QUALIDADE_WEBP}/100")
    print(f"🔄 Sobrescrever original: {'SIM' if SOBRESCREVER else 'NÃO'}\n")

    # Encontrar todas as imagens JPG/PNG
    extensoes = ('*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG')
    arquivos = []
    for ext in extensoes:
        arquivos.extend(Path(PASTA_IMGS).rglob(ext))

    if not arquivos:
        print("❌ Nenhuma imagem encontrada!")
        return

    print(f"📊 Encontradas {len(arquivos)} imagens\n")
    print("-" * 70)

    total_original = 0
    total_novo = 0
    total_arquivos = 0

    for caminho in sorted(arquivos):
        resultado = otimizar_imagem(caminho)
        if resultado:
            total_original += resultado['original']
            total_novo += resultado['novo']
            total_arquivos += 1

    print("-" * 70)
    print(f"\n📈 RESUMO:")
    print(f"   ✅ Arquivos convertidos: {total_arquivos}")
    print(f"   📦 Tamanho original: {total_original}MB")
    print(f"   📦 Tamanho novo: {total_novo}MB")
    print(f"   💾 Economia: {total_original - total_novo}MB ({round((1 - total_novo/total_original)*100, 1)}%)")
    print(f"\n💡 Próximas etapas:")
    print(f"   1. Verificar os arquivos .webp em assets/img/")
    print(f"   2. Atualizar HTML para usar <picture> com fallback JPEG")
    print(f"   3. Deletar JPEG originais quando tiver certeza")
    print("=" * 70)

if __name__ == '__main__':
    main()
