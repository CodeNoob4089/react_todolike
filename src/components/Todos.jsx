import React from "react";
import { TodoCard } from "./Style";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Todos({ todos, setTodos }) {
  const [likedCards, setLikedCards] = useState([]);
  const [likeCounts, setLikeCounts] = useState(
    todos.reduce((acc, t) => {
      acc[t.id] = 0;
      return acc;
    }, {})
  );

  const handleLike = (id) => {
    if (likedCards.includes(id)) {
      setLikeCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        newCounts[id] -= 1;
        return newCounts;
      });
      setLikedCards((prevCards) => prevCards.filter((cardId) => cardId !== id));
    } else {
      setLikeCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        newCounts[id] += 1;
        return newCounts;
      });
      setLikedCards((prevCards) => [...prevCards, id]);
    }
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((t) => t && t.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      {todos.map((t) => {
        if (!t) {
          return null;
        }
        return (
          <TodoCard key={t.id}>
            <h2>{t.title}</h2>
            <button onClick={() => handleDelete(t.id)}>삭제하기</button>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: likedCards.includes(t.id) ? "#d11f1f" : "black" }}
              onClick={() => handleLike(t.id)}
            />
            <span>{likeCounts[t.id]}</span>
          </TodoCard>
        );
      })}
    </>
  );
}

export default Todos;
