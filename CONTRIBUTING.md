# Como contribuir

Contribuições, sugestões e correções são bem-vindas. Este repositório é também um
portfólio pessoal; por isso, mudanças em textos biográficos, identidade visual e
informações profissionais dependem da aprovação da autora.

## Fluxo recomendado

1. Crie uma branch curta e descritiva a partir da branch principal.
2. Faça alterações pequenas e relacionadas a um único objetivo.
3. Execute `npm run check` e `npm run build`.
4. Atualize a documentação quando o comportamento ou a arquitetura mudar.
5. Abra um pull request explicando o problema, a solução e como ela foi validada.

## Commits

Use mensagens curtas, específicas e no imperativo. Evite mensagens genéricas
como “Atualização arquivos”. Exemplos:

```text
Adiciona resumos às capacitações
Corrige contraste da página inicial
Documenta política de privacidade
Atualiza Next.js por segurança
```

Separe alterações independentes em commits diferentes. Não misture formatação
geral, atualização de dependências e uma nova funcionalidade no mesmo commit.

## Antes de enviar

```bash
npm run check
npm run build
git diff --check
```

Confirme também que nenhum `.env`, token, certificado, dado pessoal desnecessário
ou arquivo gerado foi incluído acidentalmente.

## Licenciamento

Ao contribuir com código ou documentação técnica, você concorda que sua
contribuição seja distribuída sob a licença MIT do projeto. Conteúdo pessoal,
editorial e visual identificado no aviso de escopo do arquivo `LICENSE` não é
aberto para reutilização automática.
