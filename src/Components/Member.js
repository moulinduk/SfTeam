import React from "react";

function Member(props) {
  return (
    <div>
      <h2>{props.member.name}</h2>
      {props.member.mobile} <br />
      <a href={"mailto:" + props.member.email}> Email </a>
      <a href={props.member.facebook}> Facebook </a>
      <a href={props.member.linkedin}> LinkedIn </a>
    </div>
  );
}

export default Member;
