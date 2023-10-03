import { useEffect, useState } from "react";
import useFiltre from "../../../hook/useFiltre";
import styled from "styled-components";

type ValueInput = string | number | readonly string[] | undefined;

const NavBar = () => {
  // state -----------
  const { handleFilter } = useFiltre();
  const [proprieteValue, setProprieteValue] = useState<string>("");
  const [operateurValue, setOperateurValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<ValueInput>("");
  console.log("value of proprieteValue:", proprieteValue);
  console.log("value of operateurValue:", operateurValue);
  console.log("value of searchBar:", searchValue);

  // comportement ----------
  useEffect(() => {
    const getFilter = () => {
      handleFilter(proprieteValue, operateurValue, searchValue);
    };
    getFilter();
  }, [proprieteValue, operateurValue, searchValue]);

  return (
    <NavbarStyled>
      <div className="section">
        <div className="cham">
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setProprieteValue(event.target.value);
            }}
          >
            <option value="tous">propriété</option>
            <option value="1">id</option>
            <option value="2">price</option>
            <option value="3">title</option>
            <option value="4">available</option>
          </select>
        </div>
        <div className="operator">
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setOperateurValue(e.target.value);
            }}
          >
            <option value="tous">opérateur</option>
            <option value="1">Différent de (ne)</option>
            <option value="2">Egal à (eq)</option>
            <option value="3">Supérieur à (gt)</option>
            <option value="4">Inférieur à (lT)</option>
          </select>
        </div>
        <div className="id">
          <input
            type="text"
            placeholder="valeur"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
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
