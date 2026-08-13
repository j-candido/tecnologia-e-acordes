# Arquitetura do Projeto

## Framework

- Next.js

## Linguagem

- TypeScript

## Estilização

- Tailwind CSS

## Organização

```

app/

components/

public/

docs/

```

Cada área do site possui uma rota no App Router e utiliza componentes independentes.

O layout raiz reúne o cabeçalho, o rodapé, o botão de voltar ao topo e os
metadados globais. A integração em `lib/blogger.ts` consulta, normaliza e
sanitiza as publicações recebidas do Blogger.

Objetivo:

- organização;
- reutilização;
- manutenção simples;
- escalabilidade.

