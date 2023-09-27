import styled from "styled-components";

const NavBar = () => {
  return (
    <NavbarStyled>
      <div className="section">
        <div className="cham">
          <input type="text" placeholder="champ" />
        </div>
        <div className="operator">
          <input type="text" placeholder="operator" />
        </div>
        <div className="id">
          <input type="text" placeholder="id" />
        </div>
      </div>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: blue;
  top: 0;
  position: absolute;

  .section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .cham {
      height: 90%;
      width: 45%;
      /* border: 1px solid red; */
    }
  }

  h3 {
    color: white;
  }
`;

export default NavBar;
