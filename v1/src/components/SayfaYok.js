import React, { Component }     from "react";
import { Link }     from "react-router-dom";

export default class SayfaYok extends Component {
    render() {
        return (
            <section>
                <div className="sayfayok">
                    <div className="container">
                        <div className="flex">
                            <div className="ck12 b6">
                                <h2>404</h2>
                                <p>
                                    Böyle bir sayfa bulunamadı... Ne yapmak istemiştiniz?
                                </p>
                                <p>
                                    <Link to="/" className="buton">Ana Sayfa'ya git</Link>
                                </p>
                            </div>
                            <div className="ck12 b6">
                                <details open>
                                    <summary>İletişime geçmek istiyorum.</summary>
                                    <p>
                                        <a href="mailto:iletisim@omergulcicek.com?subject=feedback">iletisim@omergulcicek.com</a> eposta adresine mail atabilirsiniz. Lütfen mailinizi açıklayan kısa bir konu başlığı yazınız.
                                    </p>
                                </details>
                                <details open>
                                    <summary>Site yaptırmak istiyorum.</summary>
                                    <p>
                                        <Link to="/iletisim">İletişim</Link> sayfasındaki <b>freelance</b> başlığını okuyup, tarafıma mail gönderebilirsiniz.
                                    </p>
                                </details>
                                <details open>
                                    <summary>Bu sitenin kaynak kodlarına erişebilir miyim?</summary>
                                    <p>
                                        Elbette. Açık kaynak olarak geliştiriyorum.
                                    </p>
                                    <p>
                                        <a href="https://github.com/omergulcicek/omergulcicek.com">github.com/omergulcicek</a> adresinden ilgili dosyalara ulaşabilirsiniz. Kodları kendinize göre özelleştirebilirsiniz.
                                    </p>
                                    <p>
                                        Desteklemek için <u>star</u>layıp, <u>pull request</u> gönderebilirsiniz.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
