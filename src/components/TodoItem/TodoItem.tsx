import React, { useState } from "react";
import { Checkbox, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

type typeProps = {
  item: {
    id: number;
    name: string;
    isChecked: boolean;
  };
  onChange: (check: boolean, id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ onChange, item, onDelete }: typeProps) {
  const [checked, setChecked] = useState(item.isChecked);
  const handleChange = (evt: CheckboxChangeEvent) => {
    setChecked(evt.target.checked);
    onChange(evt.target.checked, item.id);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Checkbox checked={checked ? true : false} onChange={handleChange}>
        {item.name}
      </Checkbox>
      <Button
        danger
        icon={<DeleteOutlined />}
        onClick={() => onDelete(item.id)}
      ></Button>
    </div>
  );
}
