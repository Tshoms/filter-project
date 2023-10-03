import styled from "styled-components";

const HeadMap = () => {
  return (
    <HeadMapStyled>
      <div className="tr">
        <div className="th">id</div>
        <div className="th">catégorie</div>
        <div className="th">title</div>
        <div className="th">price</div>
      </div>
    </HeadMapStyled>
  );
};

const HeadMapStyled = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
  /* border: 1px solid black; */

  .tr {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    .th {
      height: 100%;
      width: 260px;
      border: 1px solid black;
    }
  }
`;

export default HeadMap;
