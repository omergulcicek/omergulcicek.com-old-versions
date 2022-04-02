import ArticleDetail from "@/components/articleDetail"
import { html, attributes } from "@/posts/izmir-marmaris-oludeniz-tatili.md"

const Article = () => {
  return (
    <>
      <ArticleDetail {...attributes} html={html} />
    </>
  )
}

export default Article
