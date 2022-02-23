import React, { Component, Fragment } from "react";
import "./turkuaz.css";
import "./App.css";

import Header from "./pages/Header";
import Social from "./pages/Social";
import About from "./pages/About";
import WorkExperience from "./pages/WorkExperience";
import ReferenceWorks from "./pages/ReferenceWorks";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        job: "Frontend Developer",
        name: "Ömer Gülçiçek"
      },
      about: [
        "Ben <strong>Ömer Gülçiçek</strong>, Şubat 93'te İstanbul'da doğdum, aslen Trabzon'luyum. İngilizce hazırlık eğitimi ile başladığım Yazılım Mühendisliği bölümünden 2017 yılında mezun oldum.",
        "Web geliştirmede mevcut en iyi dilleri kullanarak iyi tasarlanmış, temiz ve verimli kod yazma konusunda yetenekliyim. Frontend dünyasının hızlı gelişimine ayak uydurabilen, yeni şeyler öğrenmeyi seven, çalışkan bir takım oyuncusuyum.",
        "HTML5, CSS3, SASS, JavaScript, ES6, jQuery, JSON, AJAX, React, React Router, Gulp, TFS, Kendo UI, Bootstrap, Semantic UI, Materialize CSS ve Turkuaz CSS'te tecrübem var. Yazılım alanında Türkçe kaynak sayısını arttırmak adına GitHub üzerinden çeviriler yapmaktayım."
      ],
      referenceWorks: [
        {
          name: "Turkuaz Css",
          description:
            "Daha hızlı ve kolay web sayfaları geliştirmek için tasarlanan güçlü bir Framework",
          date: "Nisan 2016",
          link: "https://turkuazcss.com"
        },
        {
          name: "Türkçe Doküman",
          description:
            "Yazılım alanında Türkçe dokümanların bulunduğu bir açık kaynak proje",
          date: "Nisan 2018",
          link: "https://turkcedokuman.com"
        },
        {
          name: "Toroslar Kapitone",
          description:
            "Türkiye'nin en büyük kapitone fabrikasının web site ön yüz çalışması",
          date: "Eylül 2016",
          link: "https://toroslarkapitone.com"
        },
        {
          name: "React JS Dokümanı",
          description:
            "Facebook'un geliştirdiği JavaScript kütüphanesinin Türkçe uyarlaması",
          date: "Aralık 2017",
          link: "https://omergulcicek.github.io/reactjs"
        }
      ],
      workExperience: [
        {
          companyName: "Arneca",
          description:
            "Şu anda Arneca bünyesinde, şirket içerisindeki projelere destek olmaktayım.",
          dueDate: "Devam",
          link: "http://www.arneca.com",
          profession: "Frontend Developer",
          startDate: "Eyl 2017"
        },
        {
          companyName: "Ziraat Teknoloji",
          description:
            "Arneca çalışanı olarak danışmanlık hizmeti verilen Ziraat Teknoloji'de proje bazlı görev alındı. Banka içerisinde kullanılan arayüz ve bileşenler geliştirildi. Backend'inde ASP.NET MVC kullanılan projede önyüzde Bootstrap, Kendo UI kütüphanesi ve jQuery kullanıldı.",
          dueDate: "Ağu 2018",
          isConsultant: true,
          link: "http://www.ziraatteknoloji.com",
          profession: "Frontend Consultant",
          startDate: "Eyl 2017"
        },
        {
          companyName: "Kartaca Bilişim",
          description:
            "2017 yılında Kartaca şirketinde çalışmaya başlanıldı. Şirket içi projelerde kullanılan ve frameset ile geliştirilen PHP içerik yönetim sistemi, frameset bağımlılığından kurtarılarak HTML5 ve  Material CSS kullanılarak baştan geliştirildi.",
          dueDate: "Ağu 2017",
          link: "http://www.kartaca.com",
          profession: "Frontend Developer",
          startDate: "Tem"
        },
        {
          companyName: "Nuevo Softwarehouse",
          description:
            "2016 yılında 2 ay Nuevo Softwarehouse'da çalıştım.  Üniversite stajı boyunca ASP.NET tabanlı isinisev.com sitesi Bootstrap, SASS ve jQuery kullanılarak geliştirildi.",
          dueDate: "Mart 2016",
          link: "http://www.nuevo.com.tr",
          profession: "Frontend Developer",
          startDate: "Ocak"
        }
      ]
    };
  }
  render() {
    const { header, about, referenceWorks, workExperience } = this.state;
    return (
      <Fragment>
        <Header header={header}>
          <Social />
        </Header>
        <About about={about} />
        <WorkExperience workExperience={workExperience} />
        <ReferenceWorks referenceWorks={referenceWorks} />
        <Contact>
          <Social />
        </Contact>
        <Footer />
      </Fragment>
    );
  }
}
