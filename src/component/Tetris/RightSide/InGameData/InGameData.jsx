import React from "react";
import PropTypes from "prop-types";
import "./InGameData.scss";

const InGameData = ({ lib = "value", data = 0 }) => {
  return (
    <section className="num-data">
      {lib} :<br />
      {data}
    </section>
  );
};

InGameData.propTypes = {
  lib: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};

export default InGameData;
