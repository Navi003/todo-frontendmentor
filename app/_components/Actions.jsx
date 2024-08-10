import React from "react";

function Actions({ length }) {
  return (
    <div className="flex justify-between p-4 rounded-b-md bg-dark-very-dark-grayish-blue-2">
      <div> {length} Items left </div>
      <div className="space-x-3">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <div>Clear Completed</div>
    </div>
  );
}

export default Actions;
