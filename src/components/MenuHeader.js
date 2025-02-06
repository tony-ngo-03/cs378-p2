import React from "react";


const MenuHeader = ({logoSource, cursiveText, taglineText}) => {
    return (
        <div>
            <div className="container m-auto w-50 h-50">
            <div className="row align-items-center">
              <div className="col">
                <img className="img-fluid" src={logoSource} alt="Logo"></img>
              </div>
            </div>
          </div>
          <div className="container mb-5 mt-5 p-auto">
            <div className="row align-items-center">
              <div className="col">
                <h2 className="center-text cursive-text">{cursiveText}</h2>
                <h3 className="center-text tagline-text">{taglineText}</h3>
              </div>
            </div>
          </div>
        </div>
    );
};

export default MenuHeader;