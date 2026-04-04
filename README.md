# Poupa Bike

Catalogo em React para exibicao de scooters eletricas, ciclomotores, triciclos e acessorios, com carrossel, modal de detalhes, pagina de contato e galerias locais por produto.

## Tecnologias

- React
- Vite
- CSS puro

## Funcionalidades

- Catalogo com categorias `SCOOTERS` e `ACESSORIOS`
- Carrossel principal com destaque do item atual
- Modal com detalhes do produto
- Galeria local por produto usando imagens em `public/<pasta-do-item>/`
- Pagina de contato com mapa, WhatsApp e telefone
- SEO basico com metadados, `robots.txt`, `sitemap.xml` e `site.webmanifest`

## Como rodar

```powershell
npm.cmd install
npm.cmd run dev
```

## Build de producao

```powershell
npm.cmd run build
```

## Estrutura das imagens

Para cada produto, voce pode usar uma pasta dentro de `public` com imagens numeradas:

```text
public/v8/1.png
public/v8/2.png
public/v8/3.png
```

O projeto tenta usar automaticamente:

- `1.png`, `1.jpg`, `1.jpeg` ou `1.webp` como capa
- as demais imagens numeradas como galeria no modal

## SEO

Arquivos adicionados para indexacao:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/site.webmanifest`

Importante:

- troque `https://SEU-DOMINIO-AQUI.com` pelo dominio real em `public/robots.txt` e `public/sitemap.xml`

## Deploy na Vercel

1. Envie o projeto para o GitHub.
2. Importe o repositorio na Vercel.
3. Use o comando `npm run build`.
4. Use `dist` como pasta de saida.

## Rodape

Projeto ajustado para o catalogo da Poupa Bike.
