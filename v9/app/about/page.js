import Link from "next/link"
import Title from "../../components/Title"

export default function Page() {
  return (
    <>
      <section>
        <Title>Hakkında</Title>

        <div className="bg-red-500">Parça parça değil tek makale şeklinde</div>

        <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            İstanbul'da yaşayan bir yazılım mühendisiyim.
            <br />
            Şu anda Gordion'da bir NextJS projesi üzerinde çalışıyorum.
            <br />
            UI/UX, Web Vitals, A11Y Project konularına tutkuluyum.
          </p>

          <p>
            Türkçe kaynak sayısını arttırmak adına yazılım alanında çeviriler
            yapmaktayım. Düzenli olarak makaleler yazıyorum.
          </p>

          <p>
            Bu site için tek motivasyonum, öğrendiklerimi paylaşmak ve belki
            birkaç kişiyle bağlantı kurmak.
          </p>
        </div>

        <h2 className="text-xl leading-snug font-semibold mt-16 dark:text-white">
          Eğitim
        </h2>

        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            Bildiklerimi başkalarına aktarmayı seviyorum. Freelance iş, özel
            ders yada eğitmenlik için yazabilirsiniz.
          </p>

          <p>
            Kodluyoruz - Kırıkkale Front-End Web Geliştirme 101 Bootcamp
            <br />
            12 Aralık - 24 Ocak 2021 tarihleri arasında farklı alanlardan 30
            öğrenciye sıfırdan Frontend eğitimi verdim. <br />
            Sırasıyla HTML, CSS, Git, JavaScript ve React anlattım.
          </p>

          <p>
            Bir çok kişiye birebir özel ders verdim ve online olarak özel ders
            vermeye devam ediyorum.
          </p>

          <p>
            Çalıştığım şirketlerde teknik sunumlar yapmaya özen gösteriyorum.
          </p>
        </div>

        <h2 className="text-xl leading-snug font-semibold mt-16 dark:text-white">
          Hobiler
        </h2>

        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            Kod yazmadığım zamanlarda yürüyüş yapmayı ve fotoğraf çekmeyi
            seviyorum. <br />
            Haftasonumu İstanbul'a ayırıyorum;{" "}
            <Link
              href="https://www.instagram.com/omergulcicek/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 transition hover:text-white"
            >
              gittiğim yerleri fotoğraflayıp, çeşitli bilgiler paylaşıyorum
            </Link>
            .
          </p>

          <p>
            Sıkı bir{" "}
            <a
              href="https://www.chess.com/member/omergulcicek"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 transition hover:text-white"
            >
              satranç oyuncusuyum
            </a>
            . Kendimi sürekli geliştirmeye çalışıyorum ve turnuvalara
            katılıyorum. <br />
            Blitz <i className="italic">(5+0)</i> oynuyorum ve en yüksek 1314
            eloya ulaştım.
          </p>

          <p>
            Kişisel gelişim, tarih, tasavvuf konuları başta olmak üzere{" "}
            <a
              href="https://1000kitap.com/omergulcicek"
              rel="noopener noreferrer"
              target="_blank"
              className="underline underline-offset-2 transition hover:text-white"
            >
              kitap okumayı seviyorum
            </a>
            .
            <br /> Gelecekteki evimde büyük bir kütüphaneye sahip olmayı
            hedefliyorum.
          </p>
        </div>

        <h2 className="text-xl leading-snug font-semibold mt-16 dark:text-white">
          Benimle ilgili birkaç şey
        </h2>

        <ul className="list-disc text-zinc-600 dark:text-zinc-400 text-base font-light mt-5 pl-5 md:pl-10 space-y-3">
          <li>
            <p>Roma - Osmanlı yapılarına ve tarihlerine ilgim var.</p>
          </li>
          <li>
            <p>Yeni yerler ve insanlar keşfetmeyi seviyorum.</p>
          </li>
          <li>
            <p>Durmaksızın yürüyebilirim.</p>
          </li>
          <li>
            <p>Rubik küp çözebiliyorum.</p>
          </li>
          <li>
            <p>Birçok alanda resim eğitimi aldım.</p>
          </li>
          <li>
            <p>Ney enstürmanı üflüyorum.</p>
          </li>
          <li>
            <p>Uzun bir süre olimpik yüzdüm.</p>
          </li>
          <li>
            <p>Düzenli halı saha maçı yapıyorum.</p>
          </li>
        </ul>
      </section>
    </>
  )
}
