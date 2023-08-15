// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const toggleMode = () => {
  //   if (props.mode === "light") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "1px solid black",
  //     });
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       border: "1px solid black",
  //       backgroundColor: "black",
  //     });
  //   }
  // };
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#212529" : "white",
    border: props.mode === "dark" ? "1px solid white" : " none",
  };
  return (
    <div className="container " style={myStyle}>
      <h1 className="my-3 mx-3">About Us</h1>
      <div className="accordion mx-2 my-3" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={myStyle}
            >
              <strong> Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body " style={myStyle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, aliquam a! Expedita eos veniam, harum repudiandae fugit
              ducimus hic dolorum?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maxime natus blanditiis commodi a nulla, eos,
              expedita eaque dolore magnam voluptate magni aut provident enim,
              qui quam velit minus alias similique?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={myStyle}
            >
              <strong> Free to use </strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur corrupti vero beatae ad, repellendus, voluptatem
              aliquid est perspiciatis blanditiis eveniet culpa voluptatibus
              harum obcaecati aliquam quaerat, totam animi voluptates! Unde!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              sit eum nisi ex, aut corrupti eos laudantium voluptatibus. Ab,
              natus. Dolor exercitationem nisi est quibusdam recusandae sit
              error maxime officia?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={myStyle}
            >
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              alias eum eaque, cupiditate libero recusandae ipsum facere quidem
              eius non numquam, a perferendis dolorum cumque nobis praesentium
              id? Voluptatibus, labore! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Dolor, ipsum. Voluptatum, facere. Quae ex illum
              nihil natus. Placeat id aspernatur ut delectus praesentium
              reiciendis, dolorum corrupti libero? Laboriosam, voluptate
              maiores.
            </div>
          </div>
        </div>
      </div>
      {/*      <div className="my-3">
                    <button className="btn btn-primary" onClick={toggleStyle}>
                      {btnText}
                    </button>
                </div>*/}
    </div>
  );
}
