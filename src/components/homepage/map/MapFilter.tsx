import styled from "styled-components";
import NavBar from "./NavBar";
import ItemsList from "./ItemsList";
import HeadMap from "./HeadMap";

type MapProps = {
  name: string | null;
};

const MapFilter = ({}: MapProps) => {
  return (
    <MapFilterStyled>
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

  h2 {
    color: orange;
  }
`;

export default MapFilter;
