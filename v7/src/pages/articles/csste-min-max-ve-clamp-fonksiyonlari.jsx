import ArticleDetail from "@/components/articleDetail"
import {
  html,
  attributes,
} from "@/posts/csste-min-max-ve-clamp-fonksiyonlari.md"

const Article = () => {
  return (
    <>
      <ArticleDetail {...attributes} html={html} />
    </>
  )
}

export default Article
