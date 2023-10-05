import styled from "styled-components";
import NavBar from "./NavBar";
import ItemsList from "./ItemsList";
import HeadMap from "./HeadMap";
import { FaUserCircle } from "react-icons/fa";

type MapProps = {
  name: string | null;
};

const MapFilter = ({ name }: MapProps) => {
  return (
    <MapFilterStyled>
      <div className="name">
        <FaUserCircle className="icon" />
        <h2>: {name}</h2>
      </div>
      <NavBar />
      <HeadMap />
      <ItemsList />
    </MapFilterStyled>
  );
};

const MapFilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 80%;
  background-color: white;
  border: 3px solid orange;
  position: relative;
  .name {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 7px;
    margin-left: 10px;
    position: absolute;

    .icon {
      font-size: 25px;
      color: orange;
      margin-right: 5px;
    }

    h2 {
      color: orange;
    }
  }
`;

export default MapFilter;
