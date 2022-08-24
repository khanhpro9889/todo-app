import { useState } from "react";
import Empty from "./components/Empty";
import "./App.css";
import { List } from "antd";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";

const data = [
  { id: 1, isChecked: true, name: "Grill cakes" },
  { id: 2, isChecked: false, name: "Buy some candles" },
];

type typeForm = {
  name: string;
};

function App() {
  const [list, setList] = useState(data);
  const handleChange = (check: boolean, id: number) => {
    for (let item of data) {
      if (item.id === id) return (item.isChecked = check);
    }
  };

  const handleDelete = (id: number) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (value: typeForm) => {
    setList((prev) => [
      ...prev,
      { id: Math.random(), name: value.name, isChecked: false },
    ]);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">Todo application</div>
        <div className="main">
          <Form onSubmit={handleSubmit} />
          <List
            style={{ marginTop: "16px" }}
            size="small"
            bordered
            dataSource={list}
            locale={{ emptyText: <Empty /> }}
            renderItem={(item) => (
              <List.Item>
                <TodoItem
                  onChange={handleChange}
                  onDelete={handleDelete}
                  item={item}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
