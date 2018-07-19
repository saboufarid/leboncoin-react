import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Header extends React.Component {
  onLogOut = event => {
    this.props.logOut();
    this.props.history.push("/");
    event.preventDefault();
  };
  renderNav() {
    if (this.props.user._id) {
      return (
        <Fragment>
          <li>
            <NavLink to="/publish">Déposer une annonce</NavLink>
          </li>
          <li>
            <NavLink to="/">Offre</NavLink>
          </li>
          <div className="right_menu">
            <li className="menuItem">
              <NavLink to="/" onClick={this.onLogOut}>
                Déconnexion
              </NavLink>
            </li>
            <li className="menuItem">
              <NavLink to={"/profile/" + this.props.user._id}>
                {this.props.user.username}
              </NavLink>
            </li>
          </div>
        </Fragment>
      );
    }
    return (
      <div className="right_menu">
        <li className="menuItem">
          <NavLink to="/log_in">Se connecter</NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/sign_up">Créer un compte</NavLink>
        </li>
      </div>
    );
  }
  render() {
    return (
      <header>
        <div className="box_1024">
          <img src="assets/image/logo.png" alt="" />
          <ul className="nav-list">{this.renderNav()}</ul>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
