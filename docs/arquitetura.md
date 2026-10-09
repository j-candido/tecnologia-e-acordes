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
| `/` | Banner, apresentação, curso em destaque, publicações recentes e resumo de Sobre |
| `/sobre` | Propósito do espaço, perfil e formação de Juliana, projetos e Lattes |
| `/cursos` | Cursos ministrados por Juliana Cândido, próximos e histórico |
| `/capacitacoes` | Redirecionamento permanente (308) para `/sobre` |
| `/projetos` | Redirecionamento permanente (308) para `/sobre` |
| `/blog` | Listagem das publicações obtidas do Blogger |
| `/blog/[slug]` | Página individual de uma publicação |
| `/contato` | Canais profissionais e redes sociais |
| `/sitemap.xml` | Rotas estáticas e publicações do blog |
| `/robots.txt` | Orientações para mecanismos de busca |

## Componentes e layout

O layout raiz, em `app/layout.tsx`, reúne o cabeçalho, o rodapé, o botão de
voltar ao topo, o link para pular diretamente ao conteúdo e os metadados globais.
As páginas reutilizam componentes de seção localizados em `components/`.

Os redirecionamentos em `next.config.ts` correspondem somente às duas rotas
antigas, sem abranger páginas individuais. A navegação segue Início, Sobre,
Cursos, Blog e Contato. O sitemap inclui as rotas atuais e omite os redirecionamentos.

`lib/courses.ts` concentra os cursos, a ordenação e a validação de inscrições.
`components/CourseCard.tsx` apresenta os dados e pode ser reutilizado na página
inicial. Capas locais são exibidas sem otimização, recorte ou alteração de cores,
na proporção original. O primeiro curso utiliza a capa original PNG de 1080 × 1350
fornecida pela autora e aguarda horário e local completo. O público a partir de
40 anos é informado na descrição. As inscrições estão abertas, conforme confirmação da autora. O endereço de inscrição
informado é `https://inscricoes.ufsc.br/seguranca-digital`.

`FeaturedCourse` escolhe o próximo curso pela data local de São Paulo, sem
apresentar cursos encerrados ou com data passada como futuros. A inicial
revalida a cada cinco minutos e reutiliza `CourseCard` com disposição horizontal
em telas grandes. `AboutPreview` encerra o conteúdo antes do rodapé compartilhado.

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
