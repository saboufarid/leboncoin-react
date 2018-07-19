import React from "react";

const handleClick = event => {};

const AdCreator = props => {
  let { username, phone } = props.creator.account;
  let components = [];
  // if (phone) {
  components.push(
    <button key="number" onClick={handleClick}>
      <i className="fas fa-phone fa-flip-horizontal" />
      {"  "}Voir le numéro
    </button>
  );
  // }

  return (
    <div className="creator">
      <div>
        <i className="fas fa-user-circle" />
        {username}
      </div>
      {components}
    </div>
  );
};

export default AdCreator;
