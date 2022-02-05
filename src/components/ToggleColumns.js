import React from "react";

export const ToggleColumns = (props) => {
  const onCheckboxClick = (e) => {
    props.onCheckboxClick(e.target.id, e.target.checked);
  };

  // TODO: Bind handlers and props
  return (
    <div className="toggle-columns">
      {Object.keys(props.columns).map((column, index) => {
        return (
          <div key={index}>
            <label htmlFor={column}>{column}</label>
            <input
              id={column}
              name={column}
              type="checkbox"
              checked={props.columns[column]} //Checked if column property is true or false (by column key)
              onChange={onCheckboxClick} //Handle check action
            />
          </div>
        );
      })}
    </div>
  );
};
