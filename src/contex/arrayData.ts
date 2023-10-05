import fakeData from "../data/fakeDate";
// type ------
export type Items = {
  id: string;
  category: string;
  title: string;
  price: string;
  imgLink: string;
  available: boolean;
  categoryId: string;
}[];
// variable -------
export const arrayData: Items = fakeData;
