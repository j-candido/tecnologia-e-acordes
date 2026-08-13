# Segurança e privacidade

## Objetivo

Este documento registra os controles adotados para manter o repositório público
sem expor credenciais, arquivos privados ou dados pessoais desnecessários.

## Última auditoria

**Data:** 13 de agosto de 2026

Foram verificados o código atual, os arquivos rastreados e o histórico Git em
busca de padrões comuns de chaves, tokens, certificados e chaves privadas.
Também foram avaliadas as dependências, a integração com o Blogger, os links
externos, a renderização de HTML e os dados pessoais publicados.

### Resultado

- nenhum segredo ou arquivo de ambiente foi encontrado no conteúdo rastreado;
- nenhum padrão conhecido de credencial foi encontrado no histórico Git;
- arquivos `.env`, certificados, caches e artefatos de build estão ignorados;
- `npm audit` foi concluído sem vulnerabilidades conhecidas após as atualizações;
- o HTML do Blogger é sanitizado antes da renderização;
- requisições externas possuem timeout, paginação, limite e revalidação;
- cabeçalhos de CSP, referrer, MIME sniffing, framing e permissões estão ativos.

Uma auditoria automatizada reduz riscos, mas não substitui revisão periódica nem
garante ausência absoluta de vulnerabilidades.

## Dados publicados intencionalmente

O site divulga informações profissionais necessárias ao portfólio:

- nome e trajetória de Juliana Cândido;
- e-mail institucional `j.candido@ufsc.br`;
- currículo Lattes;
- perfil do LinkedIn;
- perfil público do Instagram Tecnologia e Acordes;
- formação, capacitações, interesses e descrições de projetos.

Não devem ser adicionados ao repositório endereço residencial, telefone pessoal,
CPF, documentos, certificados com identificadores sensíveis ou qualquer dado que
não seja necessário à finalidade profissional do site.

## Credenciais e configuração local

- nunca versionar arquivos `.env`;
- usar variáveis de ambiente da plataforma de hospedagem quando forem necessárias;
- não incluir tokens ou chaves diretamente no código, em exemplos ou screenshots;
- se um segredo for publicado, revogá-lo imediatamente e removê-lo também do
  histórico Git — apagar somente o arquivo atual não é suficiente.

## Conteúdo externo

Publicações importadas do Blogger são tratadas como conteúdo não confiável. O
projeto permite apenas elementos, atributos, protocolos e provedores de iframe
predefinidos. Links preservados recebem proteção contra acesso ao contexto da
página de origem.

## Dependências

Recomenda-se executar regularmente:

```bash
npm audit
npm run check
npm run build
```

Atualizações de segurança devem ser aplicadas primeiro em uma branch separada e
validadas antes do deploy.

## Comunicação de vulnerabilidades

Não publique detalhes de uma vulnerabilidade ainda não corrigida em uma issue.
Envie uma descrição objetiva para `j.candido@ufsc.br`, incluindo o impacto e uma
forma segura de reproduzir o problema. Não inclua dados pessoais de terceiros.
