import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext";

function Order() {
  const context = useContext(MyContext);
  // const { name, rollno } = context;
  const { state } = context;
  return (
    <Layout>
      Order
      <h1>Name In Order : {state.name}</h1>
      <h1>Roll Number In Order : {state.rollno}</h1>
    </Layout>
  );
}
export default Order;
