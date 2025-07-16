import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <img
              src="../img/man2.png"  
              alt="Call center rep"
        />

            <div className="row">
 
                <h1>
                  {props.data ? props.data.title : "Loading"}

                </h1>

                <a className="btn-custom">
                  Claim Your Chair 🔥
                </a>

        </div>
          <script id="respondio__widget" src="https://cdn.respond.io/webchat/widget/widget.js?cId=04f5673d5e8345b75be35bd1a6ecbe0"></script>

      </div>
    </header>
  );
};
