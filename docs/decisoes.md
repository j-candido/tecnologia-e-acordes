# Decisões de arquitetura

## Objetivo

Manter um portfólio moderno, acessível e de fácil manutenção, reunindo conteúdo
profissional e publicações sem exigir um sistema administrativo próprio.

## Decisões adotadas

### Next.js com App Router

O Next.js é o framework principal. O App Router fornece layouts compartilhados,
rotas estáticas e dinâmicas, metadados, sitemap e robots de forma integrada.

### TypeScript

Componentes, dados externos e utilitários são tipados para reduzir erros e
facilitar alterações futuras.

### Tailwind CSS

A interface utiliza classes utilitárias para manter a identidade visual e o
comportamento responsivo próximos dos componentes.

### Componentização por área

As páginas são compostas por seções reutilizáveis. Cabeçalho, rodapé e recursos
globais ficam no layout raiz para evitar repetição e divergências entre rotas.

### Blogger como fonte de publicações

O Blogger continua sendo a ferramenta de autoria. O site consulta seu feed,
normaliza os dados e cria uma experiência visual integrada ao portfólio, incluindo
páginas próprias para cada publicação.

### Cache e revalidação

As consultas ao Blogger usam o cache do React durante a renderização e
revalidação de uma hora no `fetch`. Também há paginação, limite máximo de páginas
e timeout para evitar requisições indefinidas.

### Sanitização de conteúdo externo

Como as publicações chegam em HTML, o conteúdo é processado com `sanitize-html`
antes da renderização. Apenas elementos, atributos, protocolos e incorporações
explicitamente autorizados são preservados.

### Metadados centralizados

Um auxiliar compartilhado produz títulos, descrições, URLs canônicas, Open Graph
e Twitter Cards. Os artigos geram metadados dinâmicos a partir da publicação.

### Acessibilidade básica como requisito

O projeto utiliza HTML semântico, link para pular conteúdo, indicação da página
ativa e navegação por teclado no menu móvel.

### Validação automatizada

Lint, verificação de tipos e testes compõem o comando `npm run check`. O build de
produção é usado como validação final antes da publicação.

## Princípios

- simplicidade antes de abstrações desnecessárias;
- reutilização sem esconder o comportamento das páginas;
- conteúdo externo tratado como não confiável;
- experiência consistente em desktop, tablet e celular;
- evolução incremental acompanhada de documentação.
