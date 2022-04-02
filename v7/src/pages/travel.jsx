import { useEffect } from "react"
import Title from "@/components/title"
import { Helmet, HelmetProvider } from "react-helmet-async"

const Travel = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Setahat | @omergulcicek</title>
          <meta name="description" content="Seyahat | Ömer Gülçiçek" />
        </Helmet>
      </HelmetProvider>

      <section>
        <Title>Seyahat</Title>
      </section>
    </>
  )
}

export default Travel
