import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

type ButtonProps = {
  label: string;
} & ComponentPropsWithoutRef<"button">;

const PrimaryButton = ({ onClick, label }: ButtonProps) => {
  return (
    <ButtonStyled onClick={onClick}>
      <span>{label}</span>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  padding: 12px 0px;
  width: 100%;
  border-radius: 10px;
  color: white;
  background-color: orange;
  border: 2px solid white;
  cursor: pointer;

  /* :hover {
    color: black;
    background-color: white;
    border: 2px solid black;
    transition: all 200ms ease-out;
  } */
`;

export default PrimaryButton;
