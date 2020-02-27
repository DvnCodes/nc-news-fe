import React from "react";

const ErrorPage = props => {
  return (
    <div>
      <h1>
        {props.err.status} {props.err.msg}
      </h1>
    </div>
  );
};

export default ErrorPage;
