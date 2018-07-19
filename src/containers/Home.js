import React from "react";
import axios from "axios";
import AdSummary from "../components/AdSummary";

class Home extends React.Component {
  state = {
    data: []
  };

  renderAd() {
    let components = [];
    for (let ad of this.state.data) {
      components.push(<AdSummary key={ad._id} ad={ad} />);
    }
    return components;
  }

  render() {
    return (
      <div className="box_1024 column">
        <h2>Liste des annonces</h2>
        <ul className="ads">{this.renderAd()}</ul>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer")
      .then(response => {
        if (response.data) {
          this.setState({
            data: response.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default Home;
