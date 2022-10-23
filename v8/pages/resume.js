const arr = [
  "HTML5",
  "CSS3",
  "Sass",
  "styled-components",
  "JavaScript",
  "React",
  "Saga",
  "NextJS",
  "GraphQL",
  "Git",
]

function Resume() {
  return (
    <>
      <div class="grid grid-rows-1 grid-flow-col gap-y-5 gap-x-20">
        <div class="row-span-1">
          <section className="mt-16 gap-12">
            <figure className="mb-12 flex flex-col items-center">
              <img
                src="/img/profile2.jpg"
                alt="Ömer Gülçiçek"
                className="rounded-full h-96 w-96 object-cover object-bottom border-4 drop-shadow-xl"
              />

              <figcaption className="flex flex-col mt-10 text-center">
                <strong className="text-4xl font-medium mb-2">
                  Ömer Gülçiçek
                </strong>
                <span className="text-xl text-gray-400">
                  Senior Frontend Developer
                </span>
                <a
                  href="mailto:iletisim@omergulcicek.com"
                  className="mt-3 mb-2"
                >
                  iletisim@omergulcicek.com
                </a>
                <a href="tel:+905543509806">0554 350 98 06</a>
              </figcaption>
            </figure>
          </section>

          <section className="grid grid-cols-5 gap-y-8 border-y-2 border-dotted py-6 mb-10">
            {arr.map((name, i) => (
              <figure key={i} className="flex justify-center">
                <img
                  src={`/svg/skills/${name
                    .replace("-", "")
                    .replace(" ", "")
                    .toLocaleLowerCase()}.svg`}
                  alt={name}
                  className="w-10 h-10"
                />
              </figure>
            ))}
          </section>

          <section className="text-center">
            <p className="text-base">
              Hakkımda detaylı bilgi için{" "}
              <a
                href="https://omergulcicek.com/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                sitemi ziyaret edebilirsiniz.
              </a>
            </p>

            <p className="text-base">
              Kişisel projelerim için{" "}
              <a
                href="https://github.com/omergulcicek/omergulcicek.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub profilim.
              </a>
            </p>
          </section>
        </div>

        <div class="col-span-2">
          <ul>
            <li className="mb-3 py-3 border-b-2 border-dotted">
              <div className="flex items-center gap-3">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQEn--qgBAvXWQ/company-logo_100_100/0/1578295616671?e=1661990400&v=beta&t=9i623PcM1aEJm3c86a4C0i9UPestJSHKbzjtz-e1f-M"
                  className="h-10"
                  alt=""
                />
                <strong className="font-mono">Gordion</strong>
                <span className="text-sm font-mono text-gray-400">
                  Ocak 2022'den itibaren
                </span>
              </div>

              <div className="text-base my-2 italic">
                NextJS, Redux Saga, Styled Components, SASS
              </div>

              <p className="text-base">
                - Frontend'in tamamiyle esnek olduğu ve tümüyle Backend'den
                beslenen bir projenin geliştirilmesi
                <br />
                - Frontend mimarisinin oluşturulması ve UI Kit hazırlanması
                <br />- Figma üzerinden gelen tasarımların responsive şekilde
                koda dökülmesi <br />- Şirket içi teknik eğitim ve sunumlar
              </p>
            </li>

            <li className="mb-3 py-3 border-b-2 border-dotted">
              <div className="flex items-center gap-3">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQFO0NOMPcRkLA/company-logo_100_100/0/1582804837347?e=1661990400&v=beta&t=wzHi0g-Ijw1jItICfEUlUaYYiNUITjerXsXBxwst6bg"
                  className="h-10"
                  alt=""
                />
                <strong className="font-mono">HangiKredi</strong>
                <span className="text-sm font-mono text-gray-400">
                  Eyl 2020 - Ara 2021 · 1 yıl 4 ay
                </span>
              </div>

              <div className="text-base my-2 italic">
                SASS, Bootstrap, Pure Javascript
              </div>

              <p className="text-base">
                - hangikredi.com'un geliştirilmesi
                <br />
                - Figma üzerinden gelen tasarımların koda dökülmesi
                <br />- Site performans puanını arttırmak amacıyla performans
                iyileştirmeleri <br />
                - Kod tekrarlarının azaltılması amacıyla JavaScript helper
                fonksiyonlarının geliştirilmesi <br />- Şirket içi teknik eğitim
                ve sunumlar
              </p>
            </li>

            <li className="mb-3 py-3 border-b-2 border-dotted">
              <div className="flex items-center gap-3">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQFoRxKZKnovLg/company-logo_100_100/0/1577696266692?e=1661990400&v=beta&t=LjIsfJ_lIrQhTJuo13NyMBWsUpP7AjV7PCOlbnIfxnU"
                  className="h-10"
                  alt=""
                />
                <strong className="font-mono">Akinon</strong>
                <span className="text-sm font-mono text-gray-400">
                  Haz 2019 - Kas 2019 · 6 ay
                </span>
              </div>

              <div className="text-base my-2 italic">LESS, jQuery, Jinja</div>

              <p className="text-base">
                - Vakko, Faraway, Kemal Tanca, Desa, A101 vs bir çok e-ticaret
                sitesinin geliştirilmesi
                <br />
                - Sitelerdeki tüm section'ların komponent mantığında
                geliştirilmesi
                <br />- Geliştirilen componentlerin dokümantasyonunun
                oluşturulması
              </p>
            </li>

            <li className="mb-3 py-3 border-b-2 border-dotted">
              <div className="flex items-center gap-3">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQF-17CigzRmgw/company-logo_100_100/0/1526626186669?e=1661990400&v=beta&t=ePBPb2j9eatR2efJ8hOZd8fL1yuzYvqOrjnH3r7Dcpc"
                  className="h-10"
                  alt=""
                />
                <strong className="font-mono">Turkcell</strong>
                <span className="text-sm font-mono text-gray-400">
                  Tem 2018 - Kas 2018 · 5 ay
                </span>
              </div>

              <div className="text-base my-2 italic">
                HTML, CSS, Pure Javascript, jQuery
              </div>

              <p className="text-base">
                - Ekibin fark ettiği tüm ön yüz hataları anlık olarak
                çözümlenmesi
              </p>
            </li>

            <li className="mb-3 py-3 border-b-2 border-dotted">
              <div className="flex items-center gap-3">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQHPxWkywjuWOw/company-logo_100_100/0/1519895402068?e=1661990400&v=beta&t=mFHVy_2iEIX7ZCibZCEsYKqVq8Sb6jj_AuBjXkI7Ans"
                  className="h-10"
                  alt=""
                />
                <strong className="font-mono">Ziraat Teknoloji</strong>
                <span className="text-sm font-mono text-gray-400">
                  Tem 2017 - Haz 2018 · 1 yıl
                </span>
              </div>

              <div className="text-base my-2 italic">
                HTML, SASS, Kendo UI, Pure Javascript, jQuery
              </div>

              <p className="text-base">
                - Kendo UI framework'ü kullanılan, admin paneli tasarımında bir
                projedenin geliştirilmesi <br />
                - Kendo UI componentlerinin destek sağlamadığı özelliklerin
                JavaScript ile geliştirilmesi <br />- Responsive olmayan bir
                arayüzü tamamen responsive desteği getirilmesi
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Resume
