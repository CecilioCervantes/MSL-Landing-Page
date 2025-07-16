import React from "react";

export const About = (props) => {
  return (
    <div id="about">




              <h2>ready to earn what you´re worth?</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Join the Storm?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul> 
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                  
                </div>
              </div>



        <div className="about-hero">
          <img
              src="../img/man1.png"   // adjust path based on your project
              alt="Call center rep"
              className="about-agent-img"
          />
        </div>
      </div>

  );
};
