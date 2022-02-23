import React, { Component, Fragment } from "react";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <section id="contact">
          <h1 className="section__heading spans">
            <span>İletişime</span>
            <span> Geç</span>
          </h1>
          <div className="container">
            <div className="row">
              <div className="ck12 b6">
                <p>
                  Web sitesi yaptırmak istiyorsanız beraber çalışabiliriz.
                  Freelance olarak aldığım işlerde her zaman son teknoloji ve
                  yazılım dillerini kullanıp, oldukça hızlı ve güvenli siteler
                  geliştirerek, size kaliteli bir hizmet sunmayı amaçlıyorum.
                </p>
                <p>Beraber çalışmak için lütfen mail atınız.</p>
              </div>
              <div className="ck12 b6">
                <div className="contact">
                  <h5 className="contact__mail">
                    <a href="mailto:iletisim@omergulcicek.com">
                      iletisim@omergulcicek.com
                    </a>
                  </h5>
                  <span className="etiket">Adres</span>
                  <p>İstanbul (Avrupa) / Türkiye</p>
                  <div className="contact__social">{this.props.children}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
