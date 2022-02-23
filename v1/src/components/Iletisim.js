import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Iletisim extends Component {
    render() {
        return (
            <section>
                <div className="iletisim">
                    <div className="container">
                        <div className="flex">
                            <div className="ck12">
                                <h2>İletişim</h2>
                                <p>
                                    Benimle iletişime geçmek için <a href="mailto:iletisim@omergulcicek.com">iletisim@omergulcicek.com</a> adresine mail atabilirsiniz. Gönderdiğiniz mail'e lütfen kısa bir <u>konu başlığı</u> yazınız. Telefonla aramak yada WhatsApp'tan ulaşmak yerine mail atmayı tercih edin.
                                </p>
                                <p>
                                    Lütfen donanım yada yazılımsal sorunlar için mail atmayınız. Bu tarz sorularınızı google, stackoverflow yada ilgili facebook gruplarına sorarak birçok kişiden yanıt alabilirsiniz.
                                </p>

                                <h3>Freelance</h3>
                                <p>
                                    <Link to="/referanslar">Referanslar</Link> linkinden daha önce geliştirdiğim siteleri inceleyebilirsiniz.
                                </p>
                                <p>
                                    Bir web sitesini sıfırdan geliştirebilirim. Freelance olarak aldığım işlerde her zaman son teknoloji ve yazılım dillerini kullanıp, oldukça hızlı ve güvenli siteler geliştirerek, size kaliteli bir hizmet sunmayı amaçlıyorum.
                                </p>
                                <p>
                                    Web sitesi yaptırmak istiyorsanız beraber çalışabiliriz. Bunun için öncelikle nasıl bir site istediğinizi kafanızda oluşturun; kararsızlık, sitenin tamamlanma sürecini sürekli uzatacaktır. Ardından rakip markaların sitelerini inceleyerek ne tarz bir site istediğinizi belirleyin.
                                </p>
                                <p>
                                    Sitenizde kullanılacak olan tüm fotoğraf, video ve yazı içeriklerinden (<i>hakkında yazısı, açıklamalar vb.</i>) siz sorumlusunuz. Bu materyalleri ne kadar kısa sürede hazırlarsanız, sitenin gelişimi o kadar hızlı ve güzel olacaktır.
                                </p>
                                <p>
                                    Ücret bilgisini mail yoluyla tarafınıza ileteceğim. Aklınızda soru işareti kalmaması ve ödemede sorun yaşamamak adına, içerisinde site yapım süreci hakkında detaylı bilgi aktarılan formalite sözleşmeye aşağıdaki butondan ulaşabilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
