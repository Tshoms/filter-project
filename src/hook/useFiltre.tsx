import { useContext, useState } from "react";
import { arrayData } from "../contex/arrayData";
import { ArrayContext } from "../contex/ArrayContext";
// import fakeData from "../data/fakeDate";
arrayData;

type Items = {
  id: string;
  category: string;
  title: string;
  price: string;
  imgLink: string;
  available: boolean;
  categoryId: string;
};

type ValueInput = string | number | readonly string[] | undefined;

export const useFiltre = () => {
  const array = useContext(ArrayContext);
  const [arrayFilter, setArrayFilter] = useState<Items[]>(arrayData);
  console.log("value of array :", array?.array);
  console.log("value of arrayItems:", arrayFilter);
  const handleFilter = (
    valueone: string,
    valuetwo: string,
    valuethree: ValueInput
  ) => {
    console.log(
      `propriete value : ${valueone}, opérateur value : ${valuetwo}, searchBar value : ${valuethree}`
    );

    switch (valuetwo) {
      case "1":
        console.log(`${valuetwo} : opération - différent de `);
        if (valueone === "1") {
          console.log(`${valueone} : id `);

          let id = valuethree;
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter((item) => item.id !== id);
          setArrayFilter(resultArray);
          array?.setArray(resultArray);

          //   return console.log(arrayFilter);
        }
        if (valueone === "2") {
          console.log(`${valueone} : price `);

          let price = valuethree?.toString();
          console.log(price);
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter((item) => item.price !== price);
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
          //   return console.log(arrayFilter);
        }
        if (valueone === "3") {
          console.log(`${valueone} : title `);
          let title = valuethree;
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter((item) => item.title !== title);
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
          //   return console.log(arrayFilter);
        }
        if (valueone === "4" && valuethree === "indisponible") {
          console.log(`${valuethree} : value  `);
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter((item) => item.available === true);
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
          //   return console.log(arrayFilter);
        }
        if (valueone === "4" && valuethree === "disponible") {
          console.log(`${valuethree} : value  `);
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter(
            (item) => item.available === false
          );
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
          //   return console.log(arrayFilter);
        }
        break;
      case "2":
        console.log(`${valuetwo} : opération - Egal à `);
        if (valueone === "1") {
          console.log(`${valueone} : id `);
          let id = valuethree;
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter((item) => item.id === id);
          setArrayFilter(resultArray);
          array?.setArray(resultArray);

          //   return console.log(arrayFilter);
        }
        if (valueone === "2") {
          console.log(`${valueone} : price `);
          let price = valuethree?.toString();
          console.log(typeof price);
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter((item) => item.price === price);
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
          //   return console.log(arrayFilter);
        }
        if (valueone === "3") {
          console.log(`${valueone} : title `);
          let title = valuethree;
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter((item) => item.title === title);
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
          //   return console.log(arrayFilter);
        }
        if (valueone === "4" && valuethree === "disponible") {
          console.log(`${valuethree} : value  `);
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter((item) => item.available === true);
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
          //   return console.log(arrayFilter);
        }
        if (valueone === "4" && valuethree === "indisponible") {
          console.log(`${valuethree} : value  `);
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter(
            (item) => item.available === false
          );
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
          //   return console.log(arrayFilter);
        }
        break;
      case "3":
        console.log(`${valuetwo} : opération - Supérieur à `);
        if (valueone === "1") {
          console.log(`${valueone} : id `);
          let id = Number(valuethree);
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter((item) => Number(item.id) > id);
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
        }
        if (valueone === "2") {
          console.log(`${valueone} : price `);
          let price = Number(valuethree);
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter(
            (item) => Number(item.price) > price
          );
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
        }
        if (valueone === "3" || valueone === "4") {
          alert(
            "Pour l'opération supérieur seul les propriété tels que : prix et id sont valable !"
          );
        }

        break;
      case "4":
        console.log(`${valuetwo} : opération - Inférieur à `);
        if (valueone === "1") {
          console.log(`${valueone} : id `);
          console.log(`${valueone} : id `);
          let id = Number(valuethree);
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter((item) => Number(item.id) < id);
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
        }
        if (valueone === "2") {
          console.log(`${valueone} : price `);
          let price = Number(valuethree);
          let copyArray = [...arrayData];
          let resultArray = copyArray.filter(
            (item) => Number(item.price) < price
          );
          setArrayFilter(resultArray);
          array?.setArray(resultArray);
        }
        if (valueone === "3" || valueone === "4") {
          alert(
            "Pour l'opération inférieur seul les propriété tels que : prix et id sont valable !"
          );
        }

        break;

      default:
        break;
    }
  };
  return { handleFilter, arrayFilter };
};

export default useFiltre;
