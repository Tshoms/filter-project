import styled from "styled-components";

const HeadMap = () => {
  return (
    <HeadMapStyled>
      <tr>
        <th>id</th>
        <th>catégorie</th>
        <th>title</th>
        <th>price</th>
      </tr>
    </HeadMapStyled>
  );
};

const HeadMapStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  width: 100%;
  /* border: 1px solid black; */

  tr {
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    th {
      height: 100%;
      width: 260px;
      border: 1px solid black;
    }
  }
`;

export default HeadMap;
