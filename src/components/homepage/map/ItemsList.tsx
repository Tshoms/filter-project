import fakeData from "../../../data/fakeDate";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useFiltre from "../../../hook/useFiltre";

type Items = {
  id: string;
  category: string;
  title: string;
  price: string;
  imgLink: string;
  available: boolean;
  categoryId: string;
};

const ItemsList = () => {
  // state --------------
  const { arrayFilter } = useFiltre();
  const [allItems, setAllItems] = useState<Items[]>(fakeData);
  console.log("valeur de arrayFilter:", arrayFilter);

  // CONTEXT ARRAY --------

  // comportement -------------
  useEffect(() => {
    const getItems = () => {
      if (arrayFilter !== undefined) {
        setAllItems(arrayFilter);
      } else {
        setAllItems(allItems);
      }
    };
    getItems();
  }, [allItems]);

  return (
    <ItemsListStyled>
      {allItems.map((item) => (
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
