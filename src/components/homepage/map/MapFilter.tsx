import styled from "styled-components";
import NavBar from "./NavBar";

type MapProps = {
  name: string | null;
};

const MapFilter = ({ name }: MapProps) => {
  return (
    <MapFilterStyled>
      <NavBar />
      <h2>Hello {name} !!!</h2>
    </MapFilterStyled>
  );
};

const MapFilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 70%;
  background-color: white;
  position: relative;

  h2 {
    color: orange;
  }
`;

export default MapFilter;
