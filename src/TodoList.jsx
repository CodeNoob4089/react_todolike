import React, { useState } from "react";
import { nanoid } from "nanoid";
import Input from "./components/Input";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Layout from "./components/Layout";

function TodoList() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    { id: nanoid(), title: "리액트 공부하기" },
    { id: nanoid(), title: "아침 운동하기" },
    ,
  ]);
  return (
    <>
      <Layout>
        <Header />
        <Input
          title={title}
          setTitle={setTitle}
          todos={todos}
          setTodos={setTodos}
        />
        <Todos todos={todos} setTodos={setTodos} />
      </Layout>
    </>
  );
}

export default TodoList;
