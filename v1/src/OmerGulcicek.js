import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollTop from "./components/ScrollTop";
import Header from "./components/Header.js";
import KisiselBilgiler from "./components/KisiselBilgiler.js";
import SosyalAglar from "./components/SosyalAglar.js";
import Hakkinda from "./components/Hakkinda.js";
import Hedefler from "./components/Hedefler.js";
import Projeler from "./components/Projeler.js";
import Referanslar from "./components/Referanslar.js";
import Sozlesme from "./components/Sozlesme.js";
import Blog from "./components/Blog.js";
import Iletisim from "./components/Iletisim.js";
import Footer from "./components/Footer.js";
import SayfaYok from "./components/SayfaYok.js";
import Img from "./image.png";
import "./App.css";

export default class OmerGulcicek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aciklamaListesi: [
        {
          adres: "İstanbul, Türkiye"
        },
        {
          yaş: new Date().getFullYear() - 1993
        },
        {
          eposta: "iletisim@omergulcicek.com"
        },
        {
          telefon: "0(554) 350 98 06"
        }
      ],
      kisiselBilgiler: {
        name: "Ömer Gülçiçek",
        company: "Arneca Teknoloji",
        image: Img,
        job: "Frontend Developer"
      },
      hakkindaBaslik: "Merhaba,",
      cvButon: "CV Görüntüle",
      hakkinda: [
        "Şubat 93'te İstanbul Gaziosmanpaşa'da doğdum, aslen Trabzon'luyum. İngilizce hazırlık eğitimi ile başladığım Yazılım Mühendisliği bölümünden 2017 yılında mezun oldum.",
        "Frontend Developer'ım, bir web sitesini sıfırdan oluşturabiliyorum. Web geliştirmede mevcut en iyi dilleri kullanarak iyi tasarlanmış, temiz ve verimli kod yazma konusunda yetenekliyim. Frontend dünyasının hızlı gelişimine ayak uydurabilen, yeni şeyler öğrenmeyi ve öğretmeyi seven, çalışkan bir takım oyuncusuyum.",
        "HTML5, CSS3, SASS, JavaScript, ES6, jQuery, JSON, AJAX, React, React Router, Gulp, TFS, Kendo UI, Bootstrap, Semantic UI, Materialize CSS ve Turkuaz CSS'te tecrübem var. Yazılım alanında Türkçe kaynak sayısını arttırmak adına GitHub üzerinden çeviriler yapmaktayım.",
        "2016 yılı okul dönemimde 2 ay <a href='http://www.nuevo.com.tr/' target='_blank' rel='noopener noreferrer'>Nuevo Softwarehouse</a>'da çalıştım. Ardından 2017 yılında <a href='http://www.kartaca.com/' target='_blank' rel='noopener noreferrer'>Kartaca</a>'da çalıştıktan sonra danışmanlık hizmeti veren <a href='http://www.arneca.com/' target='_blank' rel='noopener noreferrer'>Arneca</a> bünyesine katıldım. 11 ay boyunda <a href='http://www.ziraatteknoloji.com/' target='_blank' rel='noopener noreferrer'>Ziraat Teknoloji</a>'de görev aldım. ",
        "Referanslar linkinden daha önce yapmış olduğum çalışmaları inceleyebilir; freelance işler için iletişim sayfasından detaylı bilgiye ulaşabilirsiniz. İletişim için e-posta'yı tercih edin.",
        "Hayallerimin ve hedeflerimin arkasından koşmaya devam edeceğim. Sevdiğim işi yapıyorum, bu sayede hayatımın sonuna kadar bir gün bile çalışmam gerekmiyor; tutkunuzu bulun ve işiniz iş olmaktan çıksın.",
        "Detaylı ve güncel özgeçmişim için aşağıdaki butonu kullanabilirsiniz."
      ],
      hedefler: [
        {
          hedef: "Amasra'yı (Bartın) gezmek",
          yapildiMi: false
        },
        {
          hedef: "Bir şirkette 1 seneni tamamla",
          yapildiMi: true,
          detay:
            "Ağustos 2017'de işe başladığım Arneca danışmanlık şirketinde 1 senemi tamamladım."
        },
        {
          hedef: "Cumalıkızık'ı (Bursa) gezmek",
          yapildiMi: false
        },
        {
          hedef: "Çocuk esirgeme kurumunu ziyaret etmek",
          yapildiMi: false
        },
        {
          hedef: "Çömlek yapmak",
          yapildiMi: false
        },
        {
          hedef: "Darülaceze ziyareti",
          yapildiMi: true
        },
        {
          hedef: "Ehliyet almak (B Sınıfı)",
          yapildiMi: false
        },
        {
          hedef: "Enstrüman çalmayı öğrenmek",
          yapildiMi: true
        },
        {
          hedef: "Gönüllü olarak projelerde yer almak",
          yapildiMi: true
        },
        {
          hedef: "İlk yardım sertifikası",
          yapildiMi: false
        },
        {
          hedef: "İngilizce",
          yapildiMi: true
        },
        {
          hedef: "İş bulmak",
          yapildiMi: true,
          detay: "Eylül 2017'de Ziraat Teknoloji şirketinde işe başladım."
        },
        {
          hedef: "Kamp yapmak",
          yapildiMi: false
        },
        {
          hedef: "Kan bağışlamak (0/10 - Bronz Madalya)",
          yapildiMi: false
        },
        {
          hedef: "Kapadokya'yı (Nevşehir) gezmek",
          yapildiMi: false
        },
        {
          hedef: "Karadeniz Turu",
          yapildiMi: false
        },
        {
          hedef: "Kitap okumak (13/100)",
          yapildiMi: false,
          detay:
            "<ul><li>Abdülhamid'in Kurtlarla Dansı - Mustafa Armağan</li><li>Allah de Ötesini Bırak - Uğur Koşar</li><li>Aşkın Gözyaşları Tebrizli Şems - Sinan Yağmur</li><li>Aşkın Gözyaşları Hz. Mevlâna - Sinan Yağmur</li><li>Aşkın Gözyaşları Hamuş - Sinan Yağmur</li><li>Geleceği Keşfedenler - Walter Isaacson</li><li>Hemdem - Sait Köşk</li><li>Kesintisiz Öğrenme - Mümin Sekman</li><li>Kuşatma 1453 - Okay Tiryakioğlu</li><li>Sadece Aptallar 8 Saat Uyur - Erdal Demirkıran</li><li>Od - İskender Pala</li><li>Piyon - Michael Sikkofield</li><li>Tennure ve Ateş - Sinan Yağmur</li></ul>"
        },
        {
          hedef: "Maraton koşmak",
          yapildiMi: false
        },
        {
          hedef: "Mektup yazmak",
          yapildiMi: false
        },
        {
          hedef: "Milli takımın maçına gitmek",
          yapildiMi: false
        },
        {
          hedef: "Pamukkale Traverten'lerini (Denizli) gezmek",
          yapildiMi: false
        },
        {
          hedef: "Puzzle bitirmek (1000 parçalı)",
          yapildiMi: false
        },
        {
          hedef: "Rafting yapmak",
          yapildiMi: false
        },
        {
          hedef: "Rubik küpü çözmek",
          yapildiMi: true
        },
        {
          hedef: "Sahilde sabahlamak",
          yapildiMi: false
        },
        {
          hedef: "Silikon Vadisi'ni (Amerika) gezmek",
          yapildiMi: false
        },
        {
          hedef: "Söğüt'ü (Bilecik) gezmek",
          yapildiMi: false
        },
        {
          hedef: "Trabzon'u gezmek",
          yapildiMi: false
        },
        {
          hedef: "Üniversiteden mezun olmak",
          yapildiMi: false
        },
        {
          hedef: "Yurt dışına çıkmak",
          yapildiMi: false
        }
      ],
      hedeflerYazilim: [
        {
          hedef: "HTML5/CSS3",
          yapildiMi: true
        },
        {
          hedef: "SASS",
          yapildiMi: true
        },
        {
          hedef: "JavaScript",
          yapildiMi: true
        },
        {
          hedef: "jQuery",
          yapildiMi: true
        },
        {
          hedef: "React",
          yapildiMi: true
        },
        {
          hedef: "React Router",
          yapildiMi: true
        },
        {
          hedef: "Redux",
          yapildiMi: false
        },
        {
          hedef: "Gulp",
          yapildiMi: true
        },
        {
          hedef: "Webpack",
          yapildiMi: false
        },
        {
          hedef: "Türkçe doküman hazırla (5/10)",
          yapildiMi: false,
          detay:
            "<ul><li><a href='https://github.com/omergulcicek/css-sass-rehberi' target='_blank' rel='noreferrer noopener'>Css Sass Rehberi</a></li><li><a href='https://github.com/omergulcicek/es6' target='_blank' rel='noreferrer noopener'>ES6</a></li><li><a href='https://github.com/omergulcicek/gulp' target='_blank' rel='noreferrer noopener'>Gulp</a></li><li><a href='https://github.com/omergulcicek/reactjs' target='_blank' rel='noreferrer noopener'>React</a></li><li><a href='https://github.com/omergulcicek/reactrouter' target='_blank' rel='noreferrer noopener'>React Router</a></li></ul>"
        },
        {
          hedef: "Türkçe Doküman",
          yapildiMi: true,
          detay:
            "2 Nisan 2018 tarihinde <a href='https://turkcedokuman.com/' target='_blank' rel='noreferrer noopener'>turkcedokuman.com</a> sitesini aktif olarak kullanıma sundum."
        },
        {
          hedef: "Turkuaz Css",
          yapildiMi: false
        },
        {
          hedef: "Turkuaz React",
          yapildiMi: false
        },
        {
          hedef: "Turkuaz Snippet",
          yapildiMi: false
        },
        {
          hedef: "Frontend eğitim sitesi aç",
          yapildiMi: false
        },
        {
          hedef: "Freelance iş yap (1/25)",
          yapildiMi: false,
          detay:
            "<ul><li><a href='https://toroslarkapitone.com/' target='_blank' rel='noreferrer noopener'>toroslarkapitone.com</a></li></ul>"
        },
        {
          hedef: "Açık kaynak projelere destek ol (3/25)",
          yapildiMi: false,
          detay:
            "<ul><li><a href='https://github.com/bcinarli/uxr' target='_blank' rel='noreferrer noopener'>github.com/bcinarli/uxr</a></li><li><a href='https://github.com/fatihacet/turkcekaynaklar-com' target='_blank' rel='noreferrer noopener'>github.com/fatihacet/turkcekaynaklar</a></li><li><a href='https://github.com/ograsyilmaz/uretken-akademi' target='_blank' rel='noreferrer noopener'>github.com/ograsyilmaz/uretken-akademi</a></li></ul>"
        },
        {
          hedef: "Gençlere kodlama eğitimi ver",
          yapildiMi: false
        },
        {
          hedef: "Şirket aç",
          yapildiMi: false
        }
      ],
      referanslar: [
        {
          ad: "Ömer Gülçiçek",
          link: "https://github.com/omergulcicek/omergulcicek.com/",
          aciklama: "Kişisel sitemin kaynak kodları",
          tarih: "Nisan 2018",
          teknolojiler: ["React", "Router"]
        },
        {
          ad: "Türkçe Doküman",
          link: "https://turkcedokuman.com/",
          aciklama: "Türkçe Dokümanların toplandığı site",
          tarih: "Nisan 2018",
          teknolojiler: ["React", "Turkuaz Css"]
        },
        {
          ad: "Toroslar Kapitone",
          link: "https://toroslarkapitone.com/",
          aciklama:
            "İstanbul'un en kaliteli, büyük ve köklü kapitone fabrikası",
          tarih: "Eylül 2017",
          teknolojiler: ["jQuery", "Owl Carousel", "Materialize"]
        },
        {
          ad: "Turkuaz Css",
          link: "https://turkuazcss.com/",
          aciklama:
            "Daha hızlı ve kolay web sayfaları geliştirmek için tasarlanan güçlü bir Framework",
          tarih: "Nisan 2016",
          teknolojiler: ["React", "Router", "Turkuaz Css"]
        }
      ],
      sonGuncellenmeTarihi: "28 Ağustos 2018"
    };
    this.mobilMenu = this.mobilMenu.bind(this);
  }
  mobilMenu(e) {
    if (document.body.offsetWidth < 1024) {
      const header = document.getElementsByTagName("header")["0"];
      const overlay = document.getElementsByClassName("overlay")["0"];
      if (!header.classList.contains("active")) {
        header.classList.add("active");
        overlay.classList.add("active");
      } else {
        header.classList.remove("active");
        overlay.classList.remove("active");
      }
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", function(e) {
      if (document.body.offsetWidth >= 1024) {
        const header = document.getElementsByTagName("header")["0"];
        let scroolPosition = window.scrollY;
        if (scroolPosition > 50) {
          header.classList.add("active");
        } else {
          header.classList.remove("active");
        }
      }
    });
  }
  render() {
    const {
      aciklamaListesi,
      kisiselBilgiler,
      hakkinda,
      hakkindaBaslik,
      hedefler,
      hedeflerYazilim,
      referanslar,
      cvButon,
      sonGuncellenmeTarihi
    } = this.state;

    return (
      <BrowserRouter>
        <Fragment>
          <Header onClick={this.mobilMenu} />
          <main>
            <KisiselBilgiler
              aciklamaListesi={aciklamaListesi}
              kisiselBilgiler={kisiselBilgiler}
            >
              <SosyalAglar />
            </KisiselBilgiler>
            <ScrollTop>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Hakkinda
                      hakkinda={hakkinda}
                      hakkindaBaslik={hakkindaBaslik}
                      cvButon={cvButon}
                    />
                  )}
                />

                <Route
                  path="/hedefler"
                  render={() => (
                    <Hedefler
                      hedefler={hedefler}
                      hedeflerYazilim={hedeflerYazilim}
                    />
                  )}
                />
                <Route path="/projeler" component={Projeler} />
                <Route
                  path="/referanslar"
                  render={() => <Referanslar referanslar={referanslar} />}
                />
                <Route path="/blog" component={Blog} />
                <Route path="/iletisim" component={Iletisim} />
                <Route path="/sozlesme" component={Sozlesme} />
                <Route component={SayfaYok} />
              </Switch>
            </ScrollTop>
          </main>
          <Footer sonGuncellenmeTarihi={sonGuncellenmeTarihi} />
          <div className="overlay" onClick={this.mobilMenu} />
        </Fragment>
      </BrowserRouter>
    );
  }
}
