# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

O formato segue as categorias de [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/),
e a versão atual acompanha o valor declarado em `package.json`.

## Não publicado

### Adicionado

- capturas da página inicial e dos projetos no README;
- política documentada de segurança e privacidade;
- orientações para contribuições e organização de commits;
- cabeçalhos HTTP defensivos para conteúdo, framing, referrer e permissões;
- conteúdo completo de capacitações, organizado automaticamente por ano;
- resumos individuais para os cursos;
- projeto de análise de dados e gestão da informação aplicada às mídias sociais;
- páginas individuais para publicações importadas do Blogger;
- metadados por rota, URLs canônicas, Open Graph e Twitter Cards;
- geração de sitemap e robots;
- testes automatizados dos utilitários do Blogger;
- menu móvel, botão de voltar ao topo e link para pular conteúdo;
- novos canais na página de contato.

### Alterado

- Next.js e dependências transitivas atualizados por segurança;
- licença esclarecida para separar código aberto de conteúdo pessoal e editorial;
- estrutura compartilhada de cabeçalho, rodapé e recursos globais;
- navegação, semântica, responsividade e estados de foco;
- layout dos projetos para acomodar títulos e descrições maiores;
- imagem de capa convertida para WebP;
- identidade visual da página inicial com fundo contínuo e melhor contraste;
- README e documentação técnica do projeto.

### Segurança

- sanitização do HTML recebido do Blogger;
- restrição de elementos, atributos, protocolos e incorporações permitidos;
- proteção adicional em links externos;
- timeout, paginação e limites para as requisições ao feed.

## 0.1.0

### Adicionado

- estrutura inicial em Next.js, React, TypeScript e Tailwind CSS;
- página inicial com apresentação e perfil;
- páginas de Sobre, Capacitações, Projetos, Blog e Contato;
- cabeçalho, rodapé e componentes iniciais;
- integração inicial com as publicações do Blogger;
- identidade visual do Tecnologia e Acordes.
