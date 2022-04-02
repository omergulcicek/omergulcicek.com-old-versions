import ArticleDetail from "@/components/articleDetail"
import { html, attributes } from "@/posts/css-mantiksal-ozellikler.md"

const Article = () => {
  return (
    <>
      <ArticleDetail {...attributes} html={html} />
    </>
  )
}

export default Article
