# Especificação do site — Tecnologia e Acordes

## Objetivo

Apresentar Juliana Cândido, sua trajetória profissional, formação, capacitações,
projetos e publicações em um portfólio que relaciona tecnologia e criatividade.

## Público

- empresas e recrutadores;
- profissionais e estudantes de tecnologia;
- pessoas interessadas em inteligência artificial, desenvolvimento e música;
- leitores das publicações do Tecnologia e Acordes.

## Identidade

A experiência deve ser elegante, minimalista, tecnológica e humana. A interface
utiliza fundo escuro contínuo, contrastes claros e detalhes em tons de violeta e
rosa, preservando legibilidade e consistência entre as páginas.

## Estrutura e requisitos funcionais

### Página inicial

- apresentar a proposta do site e a identidade profissional;
- destacar perfil, atuação, formação e interesses;
- oferecer acesso direto aos projetos;
- exibir publicações recentes do Blogger.

### Sobre

- apresentar a trajetória e o perfil profissional;
- contextualizar formação, experiência e áreas de atuação.

### Capacitações

- listar cursos e capacitações em ordem cronológica decrescente;
- agrupar os cursos pelo ano em que foram realizados;
- informar título, instituição, carga horária e um resumo de cada curso.

### Projetos

- apresentar projetos publicados e em desenvolvimento;
- informar área, situação, descrição e tecnologias relacionadas;
- incluir o projeto de análise de dados e gestão da informação aplicada às
  reações em mídias sociais.

### Blog

- obter automaticamente as publicações do Blogger;
- exibir título, data, imagem e resumo na listagem;
- disponibilizar uma rota individual baseada no slug de cada publicação;
- preservar elementos úteis do artigo após sanitizar o HTML externo;
- apresentar estado de erro quando a fonte externa estiver indisponível.

### Contato

- disponibilizar e-mail, LinkedIn, Instagram e currículo Lattes;
- identificar claramente quando um link abre um serviço externo.

## Navegação

- manter cabeçalho e rodapé em todas as páginas;
- indicar visualmente a rota ativa;
- oferecer menu adaptado para telas menores;
- permitir fechar o menu móvel com a tecla `Escape`;
- disponibilizar botão para voltar ao topo;
- oferecer link para pular diretamente ao conteúdo principal.

## Responsividade e acessibilidade

O conteúdo deve se adaptar a desktop, tablet e celular sem rolagem horizontal ou
perda de informação. Textos precisam manter contraste adequado, controles devem
possuir nomes acessíveis e a navegação essencial deve funcionar por teclado.

## SEO e compartilhamento

- definir título e descrição para cada rota;
- usar URLs canônicas;
- gerar Open Graph e Twitter Cards;
- produzir `sitemap.xml` com páginas e artigos;
- disponibilizar `robots.txt`;
- gerar metadados específicos para cada artigo.

## Segurança e resiliência

- sanitizar todo HTML recebido do Blogger antes da renderização;
- restringir protocolos, atributos e provedores de conteúdo incorporado;
- aplicar timeout, paginação e limite de páginas às consultas externas;
- manter as rotas estáticas no sitemap mesmo se o Blogger estiver indisponível.

## Tecnologias

- Next.js 16;
- React 19;
- TypeScript 5;
- Tailwind CSS 4;
- Blogger;
- `sanitize-html`;
- Vercel para hospedagem e deploy.

## Critérios de qualidade

Antes da publicação, o projeto deve passar por lint, verificação de tipos, testes
automatizados e build de produção. Mudanças funcionais relevantes devem ser
registradas no changelog e refletidas nesta documentação.
