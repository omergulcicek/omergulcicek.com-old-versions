import { useEffect } from "react"
import { useParams } from "react-router-dom"
import GetArticle from "@/utils/GetArticle"

const Article = () => {
  let { article } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <GetArticle url={article} />
    </>
  )
}

export default Article
