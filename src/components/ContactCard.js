import React from "react";
import i1 from "../images/i1.png";

const ContactCard = (props) => {
  const { id, name, email, ph } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={i1} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{ph}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;