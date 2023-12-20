import React from "react";
import FormInput from "./FormInput/FormInput";
import Posts from "./Posts/Posts";
const MainContainer = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 mx-auto">
          <div className="row">
            <Posts />
          </div>
        </div>
        <div className="col-lg-4 mx-auto">
          <FormInput />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
