import React from "react";

const Job = (props) => {
  return (
    <div className={props.className}>
      <div className="title">{props.title}</div>
      <div className="info">
        <div className="contrat">{props.contractType}</div>
        <div> - </div>
        <div className="country">{props.country}</div>
        <div> - </div>
        <div className="city">{props.city}</div>
      </div>
    </div>
  );
};
export default Job;
