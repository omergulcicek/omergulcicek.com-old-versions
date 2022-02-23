import React, { Component, Fragment }     from "react";
import { NavLink }                        from "react-router-dom";

export default class Header extends Component {
    render() {
        const mobilMenu = this.props.onClick;
        return (
            <Fragment>
                <header>
                    <nav>
                        <div className="container">
                            <NavLink exact to="/" onClick={mobilMenu}>ana sayfa</NavLink>
                            <NavLink to="/hedefler" onClick={mobilMenu}>hedefler</NavLink>
                            <NavLink to="/referanslar" onClick={mobilMenu}>referanslar</NavLink>
                            <NavLink to="/iletisim" onClick={mobilMenu}>İletİşİm</NavLink>
                        </div>
                    </nav>
                </header>
                <a className="mobilMenuButon" onClick={mobilMenu}> </a>
            </Fragment>
        );
    }
}
