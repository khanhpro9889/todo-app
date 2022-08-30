import React, { useState } from "react";
import { Checkbox, Button, Popconfirm, message } from "antd";
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

  const confirm = () => {
    onDelete(item.id);
    message.success("Removed");
  };

  const cancel = () => {};

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
      <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger icon={<DeleteOutlined />} />
      </Popconfirm>
    </div>
  );
}
