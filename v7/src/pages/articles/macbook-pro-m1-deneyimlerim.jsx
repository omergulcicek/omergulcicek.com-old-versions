import ArticleDetail from "@/components/articleDetail"
import { html, attributes } from "@/posts/macbook-pro-m1-deneyimlerim.md"

const Article = () => {
  return (
    <>
      <ArticleDetail {...attributes} html={html} />
    </>
  )
}

export default Article
