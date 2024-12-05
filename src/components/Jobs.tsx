import React from "react";
import Job from "./Job";

const Jobs = (props) => {
  return (
    <Job
      className={props.className}
      title={props.title}
      contractType={props.contractType}
      country={props.country}
      city={props.city}
    />
  );
};
export default Jobs;
