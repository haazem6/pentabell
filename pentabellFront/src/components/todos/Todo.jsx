import React, { useState } from "react";
import {useDispatch} from "react-redux";

import { BsTrashFill} from "react-icons/bs";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import { deleteTodo } from "../../api/todo";

const Todo = ({todo, setCurrentId}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  }

  const dispatch = useDispatch();
  return (
    <div className="my-8 bg-[#FFAA33] p-4 w-[70%] rounded-md space-y-4 shadow-2xl">
      <div className="flex items-center justify-between">
      <h1 className={`text-black text-3xl font-bold ${isChecked && "line-through"}`}>{todo.title}</h1>
      <div className=" flex space-x-4">
        <BiDotsHorizontalRounded size={30} className="cursor-pointer" onClick={() => setCurrentId(todo._id)}  />
        <BsTrashFill size={30} className="cursor-pointer" onClick={() => deleteTodo(todo?._id, dispatch)} />
        <input type="checkbox" className="w-10 cursor-pointer" value={isChecked} onChange={handleChange} />
      </div>
      </div>
      <div className="flex items-center justify-between">
      <p className={`text-xl font-semibold p-2 w-full text-justify ${isChecked && "line-through"}`}>{todo.description}</p>
      {isChecked && <h1 className="text-red-700 text-xl font-bold">Done</h1>}
      </div>
    </div>
  );
};

export default Todo;
