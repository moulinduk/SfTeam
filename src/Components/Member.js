import React from "react";
import "./Member.css";
import img from "./MemberImages/Moulindu.png";

function Member(props) {
  return (
    <div className="card-wrapper">
      <div className="card profile-two">
        <div className="card-image profile-img--two">
          <img src={img} alt={props.member.name} width="175px" height="225px" />
        </div>

        <ul className="social-icons">
          <li>
            <a target="blank" href={"mailto:" + props.member.email}>
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li>
            <a target="blank" href={props.member.facebook}>
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a target="blank" href={props.member.linkedin}>
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>

        <div className="details jane">
          <h2>
            {props.member.name}
            <br />
            <span className="job-title">{props.member.mobile}</span>
          </h2>
        </div>
      </div>
    </div>
  );
  // return (
  //   <li>
  //     <img src={img} alt={props.member.name} />
  //     <div class="details">
  //       <span class="name">{props.member.name}</span>
  //       {/* <span class="title">UI/UX Designer</span> */}
  //       <a class="phone" href={"tel:" + props.member.mobile}>
  //         {props.member.mobile}
  //       </a>
  //       <a class="email" href={"mailto:" + props.member.email}>
  //         {props.member.email}
  //       </a>
  //       <a
  //         target="blank"
  //         href={props.member.facebook}
  //         style={{ display: "inline", padding: "0px 30px" }}
  //       >
  //         <i class="fa fa-facebook" aria-hidden="true"></i>
  //       </a>
  //       <a
  //         target="blank"
  //         href={props.member.linkedin}
  //         style={{ display: "inline", padding: "0px 30px" }}
  //       >
  //         <i class="fa fa-linkedin" aria-hidden="true"></i>
  //       </a>
  //     </div>
  //   </li>

  // return (
  //   <div className="memberContainer">
  //     <img src={img} alt={props.member.name} width="200px" height="200px" />
  //     <h2>{props.member.name}</h2>
  //     {props.member.mobile} <br />
  //     <a href={"mailto:" + props.member.email}>
  //       <i class="fa fa-envelope" aria-hidden="true"></i>
  //     </a>
  //     <a href={props.member.facebook}>
  //       <i class="fa fa-facebook" aria-hidden="true"></i>
  //     </a>
  //     <a href={props.member.linkedin}>
  //       <i class="fa fa-linkedin" aria-hidden="true"></i>
  //     </a>
  //   </div>
  // );
}

export default Member;
