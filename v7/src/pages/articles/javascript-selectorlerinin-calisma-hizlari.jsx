import ArticleDetail from "@/components/articleDetail"
import {
  html,
  attributes,
} from "@/posts/javascript-selectorlerinin-calisma-hizlari.md"

const Article = () => {
  return (
    <>
      <ArticleDetail {...attributes} html={html} />
    </>
  )
}

export default Article
