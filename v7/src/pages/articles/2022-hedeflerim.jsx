import ArticleDetail from "@/components/articleDetail"
import { html, attributes } from "@/posts/2022-hedeflerim.md"

const Article = () => {
  return (
    <>
      <ArticleDetail {...attributes} html={html} />
    </>
  )
}

export default Article
