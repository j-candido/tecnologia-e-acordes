# Arquitetura do projeto

## Visão geral

O Tecnologia e Acordes é uma aplicação web construída com Next.js e o App
Router. As páginas são renderizadas a partir de componentes React escritos em
TypeScript, com estilização em Tailwind CSS.

O projeto combina conteúdo local do portfólio com publicações obtidas do
Blogger. O layout raiz concentra os elementos globais da interface e as páginas
mantêm metadados próprios para mecanismos de busca e compartilhamento social.

## Tecnologias principais

- Next.js 16 e React 19;
- TypeScript 5;
- Tailwind CSS 4;
- `sanitize-html` para tratamento de conteúdo externo;
- ESLint e testes nativos do Node.js para validação.

## Organização

```text
tecnologia-e-acordes/
├── app/          # Rotas, layouts, metadados, sitemap e robots
├── components/   # Componentes reutilizáveis da interface
├── lib/          # Integração com o Blogger, SEO e testes
├── public/       # Imagens e arquivos estáticos
└── docs/         # Documentação técnica e funcional
```

## Rotas

| Rota | Responsabilidade |
| --- | --- |
| `/` | Apresentação, perfil e publicações recentes |
| `/sobre` | Trajetória e informações profissionais |
| `/capacitacoes` | Cursos e capacitações agrupados por ano |
| `/projetos` | Projetos desenvolvidos e em andamento |
| `/blog` | Listagem das publicações obtidas do Blogger |
| `/blog/[slug]` | Página individual de uma publicação |
| `/contato` | Canais profissionais e redes sociais |
| `/sitemap.xml` | Rotas estáticas e publicações do blog |
| `/robots.txt` | Orientações para mecanismos de busca |

## Componentes e layout

O layout raiz, em `app/layout.tsx`, reúne o cabeçalho, o rodapé, o botão de
voltar ao topo, o link para pular diretamente ao conteúdo e os metadados globais.
As páginas reutilizam componentes de seção localizados em `components/`.

## Integração com o Blogger

O módulo `lib/blogger.ts` é responsável por:

- consultar o feed JSON do Blogger em páginas de até 100 publicações;
- limitar a consulta a 20 páginas e cada requisição a 10 segundos;
- reutilizar resultados durante a renderização com `cache` do React;
- revalidar os dados externos a cada hora;
- extrair slugs, imagens, datas e textos das publicações;
- localizar uma publicação pelo slug;
- remover ou sanitizar HTML antes da exibição.

Se a integração falhar durante a geração do sitemap, as rotas estáticas ainda
são retornadas. A área do blog também possui uma interface própria de erro.

## Segurança

O HTML recebido do Blogger passa por uma lista explícita de elementos,
atributos, protocolos e provedores de `iframe` permitidos. Links recebem
`rel="noopener noreferrer"` e imagens recebem carregamento adiado.

## SEO e descoberta

Os metadados globais ficam em `app/layout.tsx`. O auxiliar `lib/metadata.ts`
padroniza título, descrição, URL canônica, Open Graph e Twitter Cards das rotas.
As publicações possuem metadados dinâmicos, e o projeto gera `sitemap.xml` e
`robots.txt` pelo próprio Next.js.

## Qualidade

O comando `npm run check` executa ESLint, verificação de tipos e testes. Os testes
em `lib/blogger.test.ts` cobrem os utilitários usados para interpretar e limpar
as publicações externas. O build de produção é validado separadamente com
`npm run build`.
