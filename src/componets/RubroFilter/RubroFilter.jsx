import React from "react";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { CategoryListContainer } from "../CategoryListContainer/CategoryListContainer";

export const RubroFilter = () => {
  const { rubro } = useParams();
  return (
    <>
      <CategoryListContainer />
      <ItemListContainer filter={rubro} />
    </>
  );
};
