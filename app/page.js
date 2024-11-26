"use client";
import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const Main = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-green-500">
      <Header />
      <div className="flex flex-grow">
        <TaskForm addTask={addTask} resetTasks={resetTasks} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
