import React, { Component } from "react";

export default class Hedefler extends Component {
    render() {
        const { hedefler, hedeflerYazilim } = this.props;
        const hedeflerListesi = hedefler.map(function(e, i) {
            if (e.detay) {
                return <details key={i} className="bitti link"><summary>{ e.hedef }</summary><p dangerouslySetInnerHTML={{__html: e.detay}}></p></details>
            }
            else if (e.yapildiMi) {
                return <li key={i} className="bitti"> { e.hedef } </li>
            }
            else {
                return <li key={i}> { e.hedef } </li>
            }
        })
        const hedeflerYazilimListesi = hedeflerYazilim.map(function(e, i) {
            if (e.detay) {
                return <details key={i} className="bitti link"><summary>{ e.hedef }</summary><p dangerouslySetInnerHTML={{__html: e.detay}}></p></details>
            }
            else if (e.yapildiMi) {
                return <li key={i} className="bitti"> { e.hedef } </li>
            }
            else {
                return <li key={i}> { e.hedef } </li>
            }
        })
        return (
            <section>
                <div className="hedefler">
                    <div className="container">
                        <div className="flex">
                            <div className="ck12 o6">
                                <h2>Hedefler</h2>
                                <p>
                                    Şu anda { new Date().getFullYear() - 1993 } yaşındayım. Hedeflerim arasında 30 yaşına girene kadar aşağıdaki 30 maddeyi tamamlamak var. Altı çizili maddelere tıklayarak detayları görebilirsiniz.
                                </p>

                                <ul>
                                    { hedeflerListesi }
                                </ul>
                            </div>
                            <div className="ck12 o6">
                                <h2>Yazılım Hedefleri</h2>
                                <p>
                                    Frontend Developer'ım ve kariyerimi bu yönde devam ettirmek istiyorum. Aşağıdaki maddelerde çeşitli yazılımsal hedeflerim bulunmaktadır. Listeye sürekli eklemeler olacaktır.
                                </p>

                                <ul>
                                    { hedeflerYazilimListesi }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
