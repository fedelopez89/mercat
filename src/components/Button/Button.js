import React from "react";
// Styles
import * as S from "./styles";

const Button = (props) => {
  return (
    <S.Button type={props.type} onClick={props.onClick}>
      {props.children}
    </S.Button>
  );
};

export default Button;
