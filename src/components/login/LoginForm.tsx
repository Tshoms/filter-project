import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import TextInput from "../../reusable-ui/TextInput";

const LoginForm = () => {
  // state ---------
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();

  // comportement -------------

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handlechange value:", event.target.value);
    setUserName(event.target.value);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    navigate({
      pathname: "/Home/:username",
      search: createSearchParams({
        userName: userName,
      }).toString(),
    });
    setUserName("");
  };

  return (
    <LoginFormStyled>
      <div className="user-logo">
        <BiUserCircle className="logo" />
      </div>
      <TextInput onChange={handleChange} value={userName} />
      <PrimaryButton onClick={handleClick} label="Accèder à la page." />
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 30%;
  /* border: 3px solid black; */
  /* border-radius: 20%; */
  .user-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 100%;

    .logo {
      color: white;
      font-size: 60px;
    }
  }
`;

export default LoginForm;
