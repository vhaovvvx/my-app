import React, { useEffect, useState } from "react";
import productApi from "./component/api/productApi";
import TestApi from "./component/TestApi/index";
import FormInput from "./component/FormInput";

const AppTest = () => {
  const [productList, setProDucList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        setProDucList(response);
      } catch (error) {
        console.log("failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);

  async function handleTodoClick(post, index) {
    const newId = productList.find((x) => x.id === post.id);
    let newProductList = [...productList];
    const response = await productApi
      .delete(newId.id)
      .catch((err) => console.log("Error: ", err));

    if (response) newProductList.splice(index, 1);
    setProDucList(newProductList);
  }
  
  async function handleOnSubmitForm(formValues) {
    const newTodo = {
      ...formValues,
    };
    let newProDuctList = [...productList];
    const response = await productApi
      .post(newTodo)
      .catch((err) => console.log("Error: ", err));

    if (response) newProDuctList.push(response);
    setProDucList(newProDuctList);
  }

  return (
    <>
      <FormInput onSubmit={handleOnSubmitForm}></FormInput>
      <TestApi posts={productList} onTodoClick={handleTodoClick}></TestApi>
    </>
  );
};

export default AppTest;
