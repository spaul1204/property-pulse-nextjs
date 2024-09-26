import React from "react";

const PropertiesPage = ({ params }) => {
  console.log(params);
  return <div>PropertiesPage Id is {params.id}</div>;
};

export default PropertiesPage;
