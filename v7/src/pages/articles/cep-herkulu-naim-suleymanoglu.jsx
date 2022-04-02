import ArticleDetail from "@/components/articleDetail"
import { html, attributes } from "@/posts/cep-herkulu-naim-suleymanoglu.md"

const Article = () => {
  return (
    <>
      <ArticleDetail {...attributes} html={html} />
    </>
  )
}

export default Article
