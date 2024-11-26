"use client";
import React, { useState } from "react";

const TaskForm = ({ addTask, resetTasks }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && desc && time) {
      addTask({ title, desc, time });
      setTitle("");
      setDesc("");
      setTime("");
    }
  };

  return (
    <div className="w-1/2 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Task</h2>
      <form
        onSubmit={submitHandler}
        className="bg-green-500 text-black p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-2">Task Title</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border-2 border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Task Description</label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border-2 border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Task Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Task Time</label>
          <input
            type="time"
            className="w-full p-3 rounded-lg border-2 border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-green-500 font-bold py-3 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
        >
          Add Task
        </button>
      </form>
      <button
        onClick={resetTasks}
        className="mt-4 w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
      >
        Reset List
      </button>
    </div>
  );
};

export default TaskForm;
