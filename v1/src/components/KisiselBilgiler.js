import React, { Component, Fragment } from "react";
import "./../App.css";

export default class KisiselBilgiler extends Component {
    render() {
        const sosyalAglar = this.props.children;
        const aciklamaListesi = this.props.aciklamaListesi;
        const { company, job, name, image } = this.props.kisiselBilgiler;
        let names = [];
        aciklamaListesi.map((e, i) => names.push(Object.keys(aciklamaListesi[i])));
        return (
            <section>
                <div className="personelBilgisi">
                    <div className="container">
                        <div className="flex">
                            <div className="image b4">
                                <img src={image} alt="Ömer Gülçiçek" />
                            </div>
                            <div className="ck12 b8">
                                <h1>{name}</h1>
                                <h4>{company}'de {job}</h4>

                                <dl>
                                {
                                    aciklamaListesi.map((e, i) =>
                                        <Fragment key={i}>
                                            <dt>{ names[i][0] }</dt>
                                            <dd>{ e[names[i][0]] }</dd>
                                        </Fragment>
                                    )
                                }
                                </dl>

                                {sosyalAglar}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
