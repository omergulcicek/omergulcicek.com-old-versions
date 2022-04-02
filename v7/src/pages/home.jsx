import { useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ana Sayfa | @omergulcicek</title>
          <meta name="description" content="Ana Sayfa | Ömer Gülçiçek" />
        </Helmet>
      </HelmetProvider>

      <section>
        <h1>Ana Sayfa</h1>
      </section>
    </>
  )
}

export default Home
