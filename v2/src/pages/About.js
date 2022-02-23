import React, { Component, Fragment } from "react";

export default class About extends Component {
  render() {
    const about = this.props.about;
    let content = about.map((e, i) => (
      <p key={i} dangerouslySetInnerHTML={{ __html: e }} />
    ));
    return (
      <Fragment>
        <section id="about">
          <h1 className="section__heading spans">
            <span>Benim</span>
            <span> Hakkımda</span>
          </h1>
          <div className="container">
            <div className="row">
              <div className="ck12 b8">
                <div className="resume">{content}</div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
