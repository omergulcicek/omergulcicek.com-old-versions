import React, { Component, Fragment } from "react";

export default class ReferenceWorks extends Component {
  render() {
    const referenceWorks = this.props.referenceWorks;
    let referenceWorksDiv = referenceWorks.map((e, i) => (
      <div key={i} className="ck12 o6 b4">
        <div className="reference-work">
          <div className="kutu">
            <h5>{e.name}</h5>
            <p dangerouslySetInnerHTML={{ __html: e.description }} />
            <span className="etiket">{e.date}</span>
            <hr />
            <a
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
              className="kutu__link"
            >
              {e.link.replace("https://", "")}
            </a>
          </div>
        </div>
      </div>
    ));
    return (
      <Fragment>
        <section id="reference-works">
          <h1 className="section__heading spans">
            <span>Referans</span>
            <span> Çalışmalarım</span>
          </h1>
          <div className="container">
            <div className="row">
              <div className="ck12">
                <div className="reference-works">
                  <div className="row">{referenceWorksDiv}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
