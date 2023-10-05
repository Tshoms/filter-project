import styled from "styled-components";
import { useContext, useEffect } from "react";
import { ArrayContext } from "../../../contex/ArrayContext";
import { arrayData } from "../../../contex/arrayData";

const ItemsList = () => {
  // state --------------
  const array = useContext(ArrayContext);
  console.log("valeur du array context:", array?.array);
  // comportement -------------
  useEffect(() => {
    const getItems = () => {
      if (array?.array !== undefined) {
        array.setArray(array?.array);
      } else {
        array?.setArray(arrayData);
      }
    };
    getItems();
  }, [array?.array]);

  return (
    <ItemsListStyled>
      {array?.array.map((item) => (
        <div className="tr" key={item.id}>
          <div className="td">{item.id}</div>
          <div className="td">{item.category}</div>
          <div className="td">{item.title}</div>
          <div className="td">{item.price}</div>
        </div>
      ))}
    </ItemsListStyled>
  );
};

const ItemsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
  overflow-y: scroll;

  .overfow {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }

  .tr {
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 100%;

    .td {
      height: 30px;
      width: 258px;
      font-size: 12px;
      border: 1px solid black;
    }
  }
`;

export default ItemsList;
