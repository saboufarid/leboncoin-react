import React from "react";
import axios from "axios";

class Publish extends React.Component {
  state = {
    title: "",
    description: "",
    price: 0
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    const { title, description, price } = this.state;
    const config = {
      headers: { Authorization: "bearer " + this.props.user.token }
    };

    axios
      .post(
        "https://leboncoin-api.herokuapp.com/api/offer/publish",
        {
          title,
          description,
          price
        },
        config
      )
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className="body">
        <div className="box_1024">
          <form onSubmit={this.onSubmit}>
            <div className="publish_box_v">
              <div className="publish_box_title">Votre annonce</div>
              <div className="publish_box_h">
                <div className="publish_box_left">
                  <label htmlFor="title">Titre de l'annonce</label>
                  <input
                    className="input"
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="description">Texte de l'annonce</label>
                  <textarea
                    className="textarea"
                    id="description"
                    name="description"
                    type="text"
                    required
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="price">Prix</label>
                  <input
                    className="input"
                    id="price"
                    name="price"
                    type="text"
                    required
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                </div>
                <div />
              </div>
            </div>
            <input
              className="submit button_validate"
              type="submit"
              value="Valider"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Publish;
