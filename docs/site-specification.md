# Especificação do site — Tecnologia e Acordes

## Objetivo

Compartilhar conteúdos, cursos, experiências e descobertas sobre tecnologia,
inteligência artificial e música, apresentando também Juliana Cândido e seus projetos.

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

- preservar o banner original e apresentar a proposta do site com acesso ao blog e aos cursos;
- destacar o próximo curso usando os dados compartilhados de `lib/courses.ts`;
- apresentar capa inteira e informações lado a lado no desktop e empilhadas no celular;
- liberar inscrição externa somente quando confirmada; nos demais casos, levar a `/cursos`;
- quando não houver próximos cursos, oferecer acesso aos cursos realizados;
- preservar as publicações recentes e a integração automática com o Blogger;
- apresentar um bloco breve sobre o espaço com link para `/sobre`, antes do rodapé.

### Sobre

- apresentar o espaço em “Sobre o Tecnologia e Acordes”;
- reunir perfil, atuação na UFSC Blumenau e formação principal em “Quem está por trás”;
- incluir o endereço real do currículo Lattes;
- reunir os projetos existentes em “Projetos que desenvolvo”, preservando informações e links.

### Cursos

- apresentar cursos ministrados por Juliana Cândido, com dados únicos em `lib/courses.ts`;
- usar `CourseCard` para reutilizar a apresentação em outras páginas;
- informar título, capa original inteira, descrição, público quando informado, data,
  horário, local ou modalidade e situação;
- mostrar “A confirmar” para dados pendentes e liberar “Inscreva-se” somente com
  inscrições abertas e endereço HTTPS válido da UFSC, em nova aba;
- listar próximos cursos antes do histórico, sem inscrição ativa em cursos encerrados;
- remover a listagem de capacitações cursadas, sem transferi-la para Sobre.

### Rotas antigas

- redirecionar `/capacitacoes` e `/projetos` permanentemente para `/sobre`;
- preservar eventuais rotas individuais de projetos;
- reunir os projetos na página `/sobre`, com a âncora `/sobre#projetos`.

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
- ordenar os menus de desktop e celular em Início, Sobre, Cursos, Blog e Contato;
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
