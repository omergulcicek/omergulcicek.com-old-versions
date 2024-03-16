import Link from "next/link"

export default function Hero({ className }) {
  return (
    <>
      <section className={`${className ? className : ""}`}>
        <h1 className="text-2xl leading-snug text-zinc-800 dark:text-zinc-100">
          <b className="font-semibold">Merhaba, Ben Ömer 👋🏻</b>
          <br />
          İstanbul'da yaşayan bir yazılım mühendisiyim.
        </h1>

        <p className="mt-6 text-base font-light text-zinc-600 dark:text-zinc-400">
          Şu anda{" "}
          <Link
            href="https://www.gordionteknoloji.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="underline underline-offset-2 transition hover:text-white"
          >
            Gordion
          </Link>{" "}
          şirketinde NextJS projeleri üzerinde çalışıyorum.
        </p>

        <p className="mt-6 text-base font-light text-zinc-600 dark:text-zinc-400">
          Fotoğraf çekmeyi, yürüyüş yapmayı ve yeni insanlarla tanışmayı çok
          seviyorum.
          <br /> Bu site için tek motivasyonum, öğrendiklerimi paylaşmak ve
          belki birkaç kişiyle bağlantı kurmak.
          <br />
          <a
            href="mailto:iletisim@omergulcicek.com?body=Merhaba Ömer,"
            className="underline underline-offset-2 transition hover:text-white"
          >
            iletisim@omergulcicek.com
          </a>{" "}
          adresinden bana ulaşabilirsin.
        </p>
      </section>
    </>
  )
}
