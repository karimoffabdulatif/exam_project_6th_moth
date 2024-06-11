import { Card } from "@mui/material";
import "./todos.css";
import { CardTitle } from "reactstrap";
import AddModal from "../../components/AddModal";
import { useState } from "react";
import TaskItem from "../../components/TaskItem";

const Todos = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        marginLeft: "250px",
        marginTop: "200px",
      }}
    >
      <Card
        style={{
          maxWidth: "350px",
          width: "100%",
          boxShadow: "1px 1px 5px 1px #0288d1" 
        }}
      >
        <CardTitle
          style={{
            padding: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Open
        </CardTitle>
        {tasks
          .filter((item) => item.status === "open")
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        <AddModal setTasks={setTasks} />
      </Card>
      <Card
        style={{
          maxWidth: "350px",
          width: "100%",
          boxShadow: "1px 1px 5px 1px #0288d1" 

        }}
      >
        <CardTitle
          style={{
            padding: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Pending
        </CardTitle>
        {tasks
          .filter((item) => item.status === "pending")
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        <AddModal setTasks={setTasks} />
      </Card>
            <Card
        style={{
          maxWidth: "250px",
          width: "100%",
          boxShadow: "1px 1px 5px 1px #0288d1" 

        }}
      >
        <CardTitle
          style={{
            padding: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Inprogres
        </CardTitle>
        
        {tasks
          .filter((item) => item.status === "inprogres")
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        <AddModal setTasks={setTasks} />
      </Card>
      <Card
        style={{
          maxWidth: "250px",
          width: "100%",
          boxShadow: "1px 1px 5px 1px #0288d1" 

        }}
      >
        <CardTitle
          style={{
            padding: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Complete
        </CardTitle>
        
        {tasks
          .filter((item) => item.status === "comlete")
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        <AddModal setTasks={setTasks} />
      </Card>
    </div>
    
  );
};

export default Todos;
