import ArticleDetail from "@/components/articleDetail"
import { html, attributes } from "@/posts/miyop-lazer-goz-ameliyati.md"

const Article = () => {
  return (
    <>
      <ArticleDetail {...attributes} html={html} />
    </>
  )
}

export default Article
