import React, { Component, Fragment } from "react";

export default class Header extends Component {
  render() {
    const { job, name } = this.props.header;
    return (
      <Fragment>
        <header className="header orta-ck bas-b">
          <div className="container">
            <div className="row">
              <div className="ck12 b6">{""}</div>
              <div className="ck12 b6">
                <div className="header__hello animated delay-325 bounceInDown">
                  <h2 className="header__hello-header">Merhaba</h2>
                </div>
                <div className="header__info">
                  <h1 className="header__info__name spans animated delay-05 bounceInDown">
                    <span>Ben</span>
                    <span> {name}</span>
                  </h1>
                  <h5 className="header__info__job animated delay-1 bounceInLeft">
                    {job}
                  </h5>
                </div>
                <div className="header__mail animated delay-15 bounceInRight">
                  <a href="mailto:iletisim@omergulcicek.com">
                    iletisim@omergulcicek.com
                  </a>
                </div>
                <div className="header__social">{this.props.children}</div>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}
