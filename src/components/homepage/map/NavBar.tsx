import styled from "styled-components";

const NavBar = () => {
  return (
    <NavbarStyled>
      <div className="section">
        <div className="cham">
          {/* <input type="text" placeholder="champ" /> */}
          <select>
            <option value="tous">propriété</option>
            <option value="1">ID</option>
            <option value="2">price</option>
            <option value="3">title</option>
            <option value="4">available</option>
          </select>
        </div>
        <div className="operator">
          <select>
            <option value="tous">opérateur</option>
            <option value="1">Différent de (ne)</option>
            <option value="2">Egal à (eq)</option>
            <option value="3">Supérieur à (gt)</option>
            <option value="4">Inférieur à (lT)</option>
          </select>
        </div>
        <div className="id">
          <input type="text" placeholder="valeur" />
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
