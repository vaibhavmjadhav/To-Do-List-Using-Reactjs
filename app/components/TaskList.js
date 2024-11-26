"use client";
const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="w-1/2 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Tasks</h2>
      <div className="bg-green-500 text-black p-6 rounded-lg shadow-md h-[70vh] overflow-y-auto">
        {tasks.length === 0 ? (
          <h2 className="text-center text-xl font-semibold">No Tasks Yet</h2>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="bg-black text-green-500 p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-lg">{task.title}</h3>
                  <p className="text-sm mb-2">{task.desc}</p>
                  <p className="text-xs">Time: {task.time}</p>
                </div>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 transition-all duration-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
