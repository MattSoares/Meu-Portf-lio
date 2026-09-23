# Portfólio de Matheus Soares

Portfólio em Next.js com projetos, tecnologias e imagens reais da Clínica OdontoVida.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificações

```bash
npm run format:check
npm run build
```

O build usa exportação estática e grava o site em `out/`.

## Estrutura

- `app/`: página, layout e estilos globais.
- `components/`: seções e interações da interface.
- `data/`: informações do perfil e projetos.
- `public/assets/`: imagens servidas pelo site.

Para hospedar em um subcaminho, defina `NEXT_PUBLIC_BASE_PATH` antes do build com o caminho do novo repositório, por exemplo `/nome-do-repositorio` para GitHub Pages.
