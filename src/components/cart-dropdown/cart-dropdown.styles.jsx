import styled from "styled-components";
import {
  GoogleSignInButton,
  BaseButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 19px;
  z-index: 5;

  ${BaseButton}
  ${GoogleSignInButton}
  ${InvertedButton} {
    margin-top: auto;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItems = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
