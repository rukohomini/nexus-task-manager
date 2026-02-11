"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#333",
          }}
        >
          Task Manager
        </h2>

        {/* Input and Add button */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <button
            onClick={addTask}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#0070f3",
              color: "white",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#005bb5")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#0070f3")
            }
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((t, index) => (
            <li
              key={index}
              onClick={() => toggleTask(index)}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
                textDecoration: t.done ? "line-through" : "none",
                color: t.done ? "gray" : "#333",
                transition: "all 0.2s",
              }}
            >
              {t.text}
            </li>
          ))}
        </ul>

        {/* Clear All Button */}
        {tasks.length > 0 && (
          <button
            onClick={clearTasks}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#e00",
              color: "white",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#c00")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#e00")
            }
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
