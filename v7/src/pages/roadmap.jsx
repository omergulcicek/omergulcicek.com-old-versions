import { useEffect } from "react"
import Title from "@/components/title"
import { Helmet, HelmetProvider } from "react-helmet-async"

const Roadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Frontend Yol Haritası | @omergulcicek</title>
          <meta name="description" content="Yol Haritası | Ömer Gülçiçek" />
        </Helmet>
      </HelmetProvider>

      <section>
        <Title>Yol Haritası</Title>
      </section>
    </>
  )
}

export default Roadmap
