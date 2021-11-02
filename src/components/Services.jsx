import React from "react";
import Card from "./Card";
import Data from "./json";

const Services = () => {
    console.log(Data);
  return (
    <>
      <div className="container-fluid nav-bg container_home">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="text-center">
              <h1>Our Services</h1>
            </div>
            <div className="row justify-content-center">
                {Data.map((curElem,index)=>{
                    return (
                        <>
                            <Card 
                                img = {curElem.cardImage}
                                ctitle = {curElem.cardTitle}
                            />
                        </>
                    )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
