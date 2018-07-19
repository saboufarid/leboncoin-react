import React from "react";
import axios from "axios";
import AdCreator from "../components/AdCreator";
import { Link } from "react-router-dom";

class Offer extends React.Component {
  state = {
    _id: "",
    title: "",
    description: "",
    price: 0,
    creator: {
      account: {}
    },
    created: ""
  };

  render() {
    let { _id, title, description, price, creator } = this.state;
    return (
      <div className="offer box_1024">
        <div>
          <div>
            <img src="" alt="" />
            <div className="ad_info">
              <Link to={`/offer/${_id}`}>{title}</Link>
              <h5 className="price">{price} €</h5>
            </div>
          </div>
          <h2>Description</h2>
          <p>{description}</p>
        </div>
        <AdCreator creator={creator} />
      </div>
    );
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      axios
        .get(
          `https://leboncoin-api.herokuapp.com/api/offer/${
            this.props.match.params.id
          }`
        )
        .then(response => {
          if (response.data) {
            this.setState({
              ...response.data
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}

export default Offer;
