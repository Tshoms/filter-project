import fakeData from "../../../data/fakeDate";
import styled from "styled-components";
import { useState } from "react";

type Items = {
  id: string;
  category: string;
  title: string;
  price: string;
  imgLink: string;
  available: boolean;
  categoryId: string;
};

const ItemsList = ({}: Items) => {
  // state --------------
  const [allItems] = useState<Items[]>(fakeData);
  console.log("value of allItems:", allItems);

  // comportement -------------
  //   useEffect(() => {
  //     const getItems = () => {
  //       setAllItems(fakeData);
  //     };
  //     getItems();
  //   }, [allItems]);
  return (
    <ItemsListStyled>
      <div className="overfow">
        {allItems.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.category}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </div>
    </ItemsListStyled>
  );
};

const ItemsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;

  .overfow {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }

  tr {
    height: 30px;
    width: 100%;

    td {
      height: 30px;
      width: 258px;
      font-size: 12px;
      border: 1px solid black;
    }
  }
`;

export default ItemsList;
