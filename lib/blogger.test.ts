import assert from "node:assert/strict";
import test from "node:test";

import {
  cleanPostHtml,
  formatPostDate,
  getPostImage,
  getPostSlug,
  removeHtml,
  type BloggerPost,
} from "./blogger.ts";

function createPost(overrides: Partial<BloggerPost> = {}): BloggerPost {
  return {
    id: { $t: "post-1" },
    title: { $t: "Publicação de teste" },
    published: { $t: "2025-01-15T12:00:00.000Z" },
    link: [
      {
        rel: "alternate",
        href: "https://example.com/2025/01/publicacao-de-teste.html",
      },
    ],
    ...overrides,
  };
}

test("extrai o slug da URL original do Blogger", () => {
  assert.equal(getPostSlug(createPost()), "publicacao-de-teste");
});

test("retorna slug vazio quando a publicação não tem URL válida", () => {
  assert.equal(getPostSlug(createPost({ link: [] })), "");
});

test("remove HTML, scripts e entidades do resumo", () => {
  assert.equal(
    removeHtml("<p>Texto &amp; conteúdo &#33; &#x1F3B8;</p><script>alert('x')</script>"),
    "Texto & conteúdo ! 🎸",
  );
});

test("trata entidades numéricas inválidas sem interromper a renderização", () => {
  assert.equal(removeHtml("Código &#99999999;"), "Código �");
});

test("extrai e melhora a resolução da imagem do conteúdo", () => {
  const post = createPost({
    content: {
      $t: '<p>Texto</p><img src="https://blogger.googleusercontent.com/img/s320/foto.jpg">',
    },
  });

  assert.equal(
    getPostImage(post),
    "https://blogger.googleusercontent.com/img/s1600/foto.jpg",
  );
});

test("trata datas inválidas sem lançar erro", () => {
  assert.equal(formatPostDate("data-inválida"), "Data não informada");
});

test("remove scripts e iframes não autorizados do conteúdo", () => {
  const html = cleanPostHtml(
    '<p>Conteúdo</p><script>alert(1)</script><iframe src="https://example.com/video"></iframe>',
  );

  assert.equal(html, "<p>Conteúdo</p>");
});

test("protege links preservados no conteúdo", () => {
  const html = cleanPostHtml('<a href="https://example.com" target="_blank">Link</a>');
  assert.match(html, /rel="noopener noreferrer"/);
});
