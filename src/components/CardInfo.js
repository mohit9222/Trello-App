import React, { useEffect, useState } from "react";
import Priority from "./Priority";
import AddCard from "./AddCard";
import Modal from "./Modal";
import { TitleOutlinedIcon } from "../utils/Icons";
import { ListAltOutlinedIcon } from "../utils/Icons";
import { DateRangeOutlinedIcon } from "../utils/Icons";
import { LabelImportantTwoToneIcon } from "../utils/Icons";
import { CheckBoxOutlinedIcon } from "../utils/Icons";
import { DeleteOutlineOutlinedIcon } from "../utils/Icons";

import { colors } from "../utils/Constants";

const CardInfo = (props) => {
  // State to manage the active color for labels
  const [activeColor, setActiveColor] = useState("");

  // State to hold and manage card values
  const [values, setValues] = useState({ ...props.card });

  // Function to calculate task completion percentage
  const calculatePercentage = () => {
    if (values.tasks.length === 0) return "0";
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return ((completed / values.tasks?.length) * 100).toString();
  };

  // Function to add a new label to the card
  const addLabel = (value) => {
    const index = values.labels?.findIndex((item) => item.text === value);
    if (index > -1) return;
    const label = {
      text: value,
      color: activeColor,
    };
    setValues({ ...values, labels: [...values.labels, label] });
    setActiveColor("");
  };

  // Function to remove a label from the card
  const removeLabel = (text) => {
    const tempLabels = values.labels?.filter((item) => item.text !== text);
    setValues({ ...values, labels: tempLabels });
  };

  // Function to add a new task to the card
  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setValues({
      ...values,
      tasks: [...values.tasks, task],
    });
  };

  // Function to remove a task from the card
  const removeTask = (id) => {
    const updatedTasks = values.tasks?.filter((item) => item.id !== id);
    setValues({
      ...values,
      tasks: updatedTasks,
    });
  };

  // Function to update the completion status of a task
  const updateTask = (id, completed) => {
    const index = values.tasks?.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempTasks = [...values.tasks];
    tempTasks[index].completed = completed;
    setValues({ ...values, tasks: tempTasks });
  };

  // Effect to update the card when values change
  useEffect(() => {
    if (
      values.title === props.card?.title &&
      values.date === props.card?.date &&
      values.desc === props.card?.desc &&
      values.labels?.length === props.card.labels?.length &&
      values.tasks?.length === props.card?.tasks?.length
    )
      return;
    props.updateCard(props.card.id, props.boardId, values);
  }, [values]);

  return (
    <div>
      {/* Modal for displaying card information */}
      <Modal onClose={() => props.onClose()}>
        <div className="cardinfo">
          {/* Title Section */}
          <div className="cardinfo_box">
            <div className="card_info_box_title">
              <TitleOutlinedIcon fontSize="large" />
              Title
            </div>
            <div className="cardInfo_box_body">
              {/* AddCard component for title */}
              <AddCard
                text={values.title}
                default={values.title}
                placeholder="Enter Title"
                buttonText="Add Title"
                onSubmit={(value) => setValues({ ...values, title: value })}
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="cardinfo_box">
            <div className="card_info_box_title">
              <ListAltOutlinedIcon />
              Description
            </div>
            <div className="cardInfo_box_body">
              {/* AddCard component for description */}
              <AddCard
                text={values.desc}
                default={values.desc}
                placeholder="Enter Description"
                buttonText="Add Description"
                onSubmit={(value) => setValues({ ...values, desc: value })}
              />
            </div>
          </div>

          {/* Deadline Section */}
          <div className="cardinfo_box">
            <div className="card_info_box_title">
              <DateRangeOutlinedIcon />
              Deadline
            </div>
            <div className="cardInfo_box_body">
              {/* Input for date selection */}
              <input
                type="date"
                defaultValue={
                  values.date
                    ? new Date(values.date).toISOString().substr(0, 10)
                    : ""
                }
                onChange={(event) => {
                  setValues({ ...values, date: event.target.value });
                }}
              />
            </div>
          </div>

          {/* Labels Section */}
          <div className="cardinfo_box">
            <div className="card_info_box_title">
              <LabelImportantTwoToneIcon />
              Labels
            </div>
            <div className="cardinfo_box_labels">
              {/* Display existing labels using Priority component */}
              {values.labels?.map((item, index) => (
                <Priority
                  close
                  onClose={() => removeLabel(item.text)}
                  key={item.text + index}
                  color={item.color}
                  text={item.text}
                />
              ))}
            </div>
            <div className="cardinfo_box_colors">
              {/* Color selection for new label */}
              {colors.map((item, index) => (
                <li
                  key={index}
                  style={{ backgroundColor: item }}
                  className={item === activeColor ? "active" : ""}
                  onClick={() => setActiveColor(item)}
                />
              ))}
              <li></li>
            </div>
            <div className="cardInfo_box_body">
              {/* AddCard component for adding a new label */}
              <AddCard
                text="Add Label"
                placeholder="Enter label"
                buttonText="Add"
                onSubmit={(value) => addLabel(value, activeColor)}
              />
            </div>
          </div>

          {/* Tasks Section */}
          <div className="cardinfo_box">
            <div className="card_info_box_title">
              <CheckBoxOutlinedIcon />
              Tasks
            </div>
            <div className="cardinfo_box_progress-bar">
              {/* Progress bar based on task completion */}
              <div
                className="cardinfo_box_progress"
                style={{ width: calculatePercentage() + "%" }}
              ></div>
            </div>

            <div className="cardinfo_box_list">
              {/* Display existing tasks */}
              {values.tasks?.map((item) => (
                <div key={item.id} className="cardinfo_task">
                  <input
                    type="checkbox"
                    defaultValue={item.completed}
                    onChange={(event) =>
                      updateTask(item.id, event.target.checked)
                    }
                  />
                  <p>{item.text}</p>
                  {/* Delete button for removing a task */}
                  <DeleteOutlineOutlinedIcon
                    onClick={() => removeTask(item.id)}
                  />
                </div>
              ))}
            </div>

            <div className="cardInfo_box_body">
              {/* AddCard component for adding a new task */}
              <AddCard
                text="Add a new task"
                placeholder="Enter task"
                buttonText="Add Task"
                onSubmit={(value) => addTask(value)}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardInfo;
