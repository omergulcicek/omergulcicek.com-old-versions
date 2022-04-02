import ArticleDetail from "@/components/articleDetail"
import {
  html,
  attributes,
} from "@/posts/styled-component-ile-dinamik-css-yazmak.md"

const Article = () => {
  return (
    <>
      <ArticleDetail {...attributes} html={html} />
    </>
  )
}

export default Article
