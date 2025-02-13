import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/myContext";

function Home() {
  const context = useContext(MyContext);
  console.log(context);
  // const { name, rollno } = context;
  const { state, hobby } = context;
  return (
    <Layout>
      Home
      <h1>Name:{state.name}</h1>
      <h1>Rool Num : {state.rollno}</h1>
      <h1>My Hobby for all day is {hobby}</h1>
    </Layout>
  );
}

export default Home;
