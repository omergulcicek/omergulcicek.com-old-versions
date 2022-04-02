import { useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import Title from "@/components/title"
import Subtitle from "@/components/subtitle"
import Skills from "@components/skills"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hakkımda | @omergulcicek</title>
          <meta name="description" content="Hakkımda | Ömer Gülçiçek" />
        </Helmet>
      </HelmetProvider>

      <section>
        <Title>Hakkımda</Title>

        <p className="text-base md:text-xl mb-5">
          Merhaba! Ben Ömer Gülçiçek. {new Date().getFullYear() - 1993}{" "}
          yaşındayım ve İstanbul'da yaşıyorum.
        </p>

        <p className="text-base md:text-xl mb-5">
          Yazılım mühendisliği alanında lisans derecem var. Frontend
          Developer'ım ve UI/UX, Web Vitals, A11Y Project konularına uzun
          süredir devam eden bir tutkum var.
        </p>

        <p className="text-base md:text-xl mb-5">
          <a
            href="https://turkuazcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition hover:text-theme-color"
          >
            Turkuaz
          </a>{" "}
          ve{" "}
          <a
            href="https://turkcedokuman.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition hover:text-theme-color"
          >
            Türkçe Doküman
          </a>{" "}
          projeleri başta olmak üzere çalışmalarımın tamamı açık kaynak. Türkçe
          kaynak sayısını arttırmak adına yazılım alanında çeviriler
          yapmaktayım. Kendimi sürekli güncel tutmak ve bildiklerimi
          aktarabilmek adına makale yazıyorum.
        </p>

        <p className="text-base md:text-xl mb-5">
          Benimle konuşmak istediğiniz bir konu varsa{" "}
          <a
            href="mailto:iletisim@omergulcicek.com?body=Merhaba Ömer,"
            className="underline underline-offset-2 hover:text-theme-color transition"
          >
            iletisim@omergulcicek.com
          </a>{" "}
          adresine detaylı bir mail atabilirsiniz. Freelance iş, özel ders yada
          eğitmenlik için müsaitim.
        </p>
      </section>

      <section>
        <Subtitle>benimle ilgili birkaç şey</Subtitle>

        <ul className="list-disc text-base md:text-xl pl-10 space-y-5">
          <li>Minimalist yaşam felsefesini seviyorum.</li>
          <li>
            Haftasonumu İstanbul'a ayırıyorum, sürekli farklı yerleri geziyorum.
          </li>
          <li>
            Sıkı bir satranç oyuncusuyum. Yıllardır günlük 5 maç ortalamasıyla
            oynuyorum, turnuvalara katılıyorum.
          </li>
          <li>Rubik küp çözebiliyorum, rekorum 57sn.</li>
          <li>Düzenli halı saha maçı yapıyorum.</li>
          <li>
            Kişisel gelişim, tarih, tasavvuf konuları başta olmak üzere kitap
            okumayı seviyorum. Gelecekteki evimde büyük bir kütüphaneye sahip
            olmayı hedefliyorum.
          </li>
        </ul>
      </section>

      <Skills />
    </>
  )
}

export default About
