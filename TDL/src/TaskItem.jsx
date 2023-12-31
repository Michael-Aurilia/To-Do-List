import React from 'react';

const TaskItem = ({ task, markTaskAsCompleted }) => {
  const handleTaskClick = () => {
    markTaskAsCompleted(task.id);
  };

  return (
    <li
      className={`TaskItem ${task.completed ? 'completed' : ''}`}
      onClick={handleTaskClick}
    >
      {task.title}
    </li>
  );
};

export default TaskItem;