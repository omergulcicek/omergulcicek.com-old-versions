import React, { Component, Fragment } from "react";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="ck">
                <p>Copyright © {new Date().getFullYear()} | Ömer Gülçiçek</p>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
