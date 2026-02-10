"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-2">Task Manager</h1>
      <p className="mb-6 text-gray-600">Built by Rukohomini</p>

      <div className="w-full max-w-md flex gap-2 mb-6">
        <input
          className="flex-1 p-3 border rounded-lg"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-black text-white px-4 rounded-lg"
        >
          Add
        </button>
      </div>

      <div className="w-full max-w-md space-y-3">
        {tasks.map((t, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
          >
            <span>{t}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
