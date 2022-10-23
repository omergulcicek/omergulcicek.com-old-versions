import Link from "next/link"
import Title from "@/components/title"
import Subtitle from "@/components/subtitle"
import Skills from "@/components/skills"
import Slider from "@/components/slider"

function About() {
  return (
    <>
      <section className="mb-16 lg:mb-32">
        <Title>Hakkında</Title>

        <div className="flex flex-col lg:flex-row">
          <Slider className="lg:w-[400px]" />

          <div className="lg:ml-10">
            <p>
              <strong>Merhaba, Ben Ömer 👋🏻</strong>
            </p>

            <p>
              İstanbul'da yaşayan bir yazılım mühendisiyim.
              <br /> Şu anda{" "}
              <a
                href="https://www.gordionteknoloji.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Gordion
              </a>
              'da bir NextJS projesi üzerinde çalışıyorum. <br />
              UI/UX,{" "}
              <a
                href="https://web.dev/vitals/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Web Vitals
              </a>
              ,{" "}
              <a
                href="https://www.a11yproject.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                A11Y Project
              </a>{" "}
              konularına tutkuluyum.
            </p>

            <p>
              <a
                href="https://turkuazcss.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Turkuaz
              </a>{" "}
              ve{" "}
              <a
                href="https://turkcedokuman.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Türkçe Doküman
              </a>{" "}
              projeleri başta olmak üzere çalışmalarımın tamamı açık kaynak.
              Türkçe kaynak sayısını arttırmak adına yazılım alanında{" "}
              <a
                href="https://github.com/omergulcicek?tab=repositories&q=turkce-kaynak&type=&language=&sort="
                rel="noopener noreferrer"
                target="_blank"
              >
                çeviriler yapmaktayım
              </a>
              . Düzenli olarak <Link href="/blog">makaleler yazıyorum.</Link>
            </p>

            <p>
              Bu site için tek motivasyonum, öğrendiklerimi paylaşmak ve belki
              birkaç kişiyle bağlantı kurmak.{" "}
              <a
                href="mailto:iletisim@omergulcicek.com?body=Merhaba Ömer,"
                className="underline underline-offset-2 transition"
              >
                iletisim@omergulcicek.com
              </a>{" "}
              adresinden bana ulaşabilirsin.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 lg:mb-32">
        <Subtitle>eğitim</Subtitle>

        <p>
          Bildiklerimi başkalarına aktarmayı seviyorum. Freelance iş, özel ders
          yada eğitmenlik için yazabilirsiniz.
        </p>

        <ul className="list-disc pl-5 space-y-3">
          <li className="">
            <a
              href="https://www.kodluyoruz.org/bootcamp/kirikkale-front-end-web-gelistirme-101-bootcamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kodluyoruz - Kırıkkale Front-End Web Geliştirme 101 Bootcamp
            </a>{" "}
            <p>
              12 Aralık - 24 Ocak 2021 tarihleri arasında farklı alanlardan 30
              öğrenciye sıfırdan Frontend eğitimi verdim. <br /> Sırasıyla HTML,
              CSS, Git, JavaScript ve React anlattım.
            </p>
          </li>

          <li>Bir çok kişiye birebir özel ders verdim, veriyorum.</li>
          <li>
            Çalıştığım şirketlerde teknik sunumlar yapmaya özen gösteriyorum.
          </li>
        </ul>
      </section>

      <section className="mb-16 lg:mb-32">
        <Subtitle>hobiler</Subtitle>

        <p>
          Kod yazmadığım zamanlarda yürüyüş yapmayı ve fotoğraf çekmeyi
          seviyorum. <br />
          Haftasonumu İstanbul'a ayırıyorum;{" "}
          <a
            href="https://www.instagram.com/omergulcicek/"
            rel="noopener noreferrer"
            target="_blank"
          >
            gittiğim yerleri fotoğraflayıp, çeşitli bilgiler paylaşıyorum.
          </a>
        </p>

        <p>
          Sıkı bir{" "}
          <a
            href="https://www.chess.com/member/omergulcicek"
            rel="noopener noreferrer"
            target="_blank"
          >
            satranç oyuncusuyum
          </a>
          . Kendimi sürekli geliştirmeye çalışıyorum ve turnuvalara katılıyorum.{" "}
          <br />
          Blitz <em>(5+0)</em> oynuyorum ve en yüksek 1314 eloya ulaştım.
        </p>

        <p>
          Kişisel gelişim, tarih, tasavvuf konuları başta olmak üzere{" "}
          <a
            href="https://1000kitap.com/omergulcicek"
            rel="noopener noreferrer"
            target="_blank"
          >
            kitap okumayı seviyorum
          </a>
          . <br />
          Gelecekteki evimde büyük bir kütüphaneye sahip olmayı hedefliyorum.
        </p>
      </section>

      <section className="mb-16 lg:mb-32">
        <Subtitle>benimle ilgili birkaç şey</Subtitle>

        <ul className="list-disc pl-5 md:pl-10 space-y-3">
          <li>Durmaksızın yürüyebilirim.</li>
          <li>Yeni yerler keşfetmeyi seviyorum.</li>
          <li>Rubik küp çözebiliyorum.</li>
          <li>Birçok alanda resim eğitimi aldım.</li>
          <li>Ney enstürmanı üflüyorum.</li>
          <li>Uzun bir süre olimpik yüzdüm.</li>
          <li>Düzenli halı saha maçı yapıyorum.</li>
        </ul>
      </section>

      <section className="mb-16 lg:mb-32" hidden>
        <Subtitle>yol haritası</Subtitle>

        <p>
          Frontend Developer kişilere tavsiye ettiğim{" "}
          <Link href="/roadmap">teknik konuları listelediğim sayfaya</Link> göz
          atabilirsiniz.
        </p>
      </section>

      <section className="mb-16 lg:mb-32">
        <Subtitle>teknik yeteneklerim</Subtitle>

        <Skills />
      </section>
    </>
  )
}

export default About
