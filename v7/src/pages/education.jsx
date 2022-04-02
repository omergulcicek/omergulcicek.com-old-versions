import { useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Link } from "react-router-dom"
import Title from "@/components/title"
import Subtitle from "@/components/subtitle"
import Skills from "@components/skills"

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projelerim | @omergulcicek</title>
          <meta name="description" content="Projelerim | Ömer Gülçiçek" />
        </Helmet>
      </HelmetProvider>

      <section>
        <Title>Eğitim</Title>

        <p className="text-base md:text-xl mb-5">
          Bildiklerimi başkalarına aktarmayı seviyorum. Freelance iş, özel ders
          yada eğitmenlik için müsaitim.
        </p>

        <ul className="list-disc pl-5 text-base md:text-xl space-y-8">
          <li className="">
            <a
              href="https://www.kodluyoruz.org/bootcamp/kirikkale-front-end-web-gelistirme-101-bootcamp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-theme-color transition"
            >
              Kırıkkale Front-End Web Geliştirme 101 Bootcamp
            </a>{" "}
            <p>
              12 Aralık - 24 Ocak 2021 tarihleri arasında farklı alanlardan 30
              öğrenciye sıfırdan Frontend eğitimi verdim.
            </p>
            <p>Sırasıyla HTML, CSS, Git, JavaScript ve React anlattım.</p>
          </li>

          <li>Lise çağındaki bir çok öğrenciye birebir özel ders verdim.</li>
          <li>
            Çalıştığım şirketlerde teknik sunumlar yapmaya özen gösteriyorum.
          </li>
        </ul>
      </section>

      <section>
        <Subtitle>yol haritası</Subtitle>

        <p className="text-base md:text-xl mb-5">
          Frontend Developer kişilere tavsiye ettiğim{" "}
          <Link
            to="/roadmap"
            className="underline underline-offset-2 hover:text-theme-color transition"
          >
            teknik konuları listelediğim sayfaya
          </Link>{" "}
          göz atabilirsiniz.
        </p>
      </section>

      <Skills />
    </>
  )
}

export default Education
