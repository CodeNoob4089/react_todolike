import React from "react";
import { nanoid } from "nanoid";
import { InputField } from "./Style";

function Input({ title, setTitle, setTodos, todos }) {
  return (
    <>
      <InputField
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (title.trim() !== "") {
            const newTodo = {
              id: nanoid(),
              title: title,
            };
            setTodos([...todos, newTodo]);
            setTitle("");
          }
        }}
      >
        추가하기
      </button>
    </>
  );
}

export default Input;
