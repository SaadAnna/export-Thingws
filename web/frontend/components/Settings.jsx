// Settings.jsx
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Settings.css";

const DraggableItem = ({ id, index, label, isChecked, moveItem, toggleItem }) => {
  const [, ref] = useDrag({
    type: "COLUMN",
    item: { index }
  });

  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    }
  });

  return (
    <div ref={(node) => ref(drop(node))} className="column-row">
      <div className="handle">☰</div>
      <label className={`switch-label ${isChecked ? "active" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleItem(id)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

const initialColumns = [
  { id: "ID", label: "ID", checked: false },
  { id: "Product", label: "Product", checked: true },
  { id: "Shipping", label: "Shipping Address", checked: true },
  { id: "Total", label: "Order Total", checked: true },
  { id: "Status", label: "Order Status", checked: true }
];

const Settings = () => {
  const [columns, setColumns] = useState(initialColumns);

  const moveItem = (fromIndex, toIndex) => {
    const updated = [...columns];
    const [movedItem] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, movedItem);
    setColumns(updated);
  };

  const toggleItem = (id) => {
    setColumns(columns.map((col) => col.id === id ? { ...col, checked: !col.checked } : col));
  };

  return (
    <div className="settings-container">
      <div className="export-box">
        <div className="row">
          <label>Export file name</label>
          <input type="text" value="Name-%date_time%" readOnly />
          <a href="#" className="dynamic-link">Insert %date_time%</a>
        </div>
        <div className="row">
          <label>Export file format</label>
          <select>
            <option>XLSX</option>
          </select>
        </div>
        <div className="row">
          <label>Orders per page</label>
          <select>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
      </div>

      <DndProvider backend={HTML5Backend}>
        <div className="columns-box">
          {columns.map((col, idx) => (
            <DraggableItem
              key={col.id}
              id={col.id}
              index={idx}
              label={col.label}
              isChecked={col.checked}
              moveItem={moveItem}
              toggleItem={toggleItem}
            />
          ))}

          <div className="column-config">
            <label>Column Title</label>
            <input type="text" value="Order Status" readOnly />
            <small>Will be used in Excel export.</small>

            <label>Column content</label>
            <div className="tag-container">
              <span className="tag">Fulfillment status</span>
              <span className="tag">Financial status</span>
            </div>
          </div>

          <button className="add-column-btn">Add column</button>
        </div>
      </DndProvider>
    </div>
  );
};

export default Settings;
