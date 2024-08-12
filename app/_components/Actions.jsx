import React from "react";

function Actions({ length }) {
  return (
    <div className="flex justify-between p-4 text-xs rounded-b-md bg-dark-very-dark-grayish-blue-2 text-dark-dark-grayish-blue sm:text-sm md:text-base">
      <div className="hover:text-dark-light-grayish-blue-hover">
        {length} Items left{" "}
      </div>
      <div className="flex gap-1 cursor-pointer sm:space-x-3">
        <span className="hover:text-dark-light-grayish-blue-hover">All</span>
        <span className="hover:text-dark-light-grayish-blue-hover">Active</span>
        <span className="hover:text-dark-light-grayish-blue-hover">
          Completed
        </span>
      </div>
      <div className="hover:text-dark-light-grayish-blue-hover">
        Clear Completed
      </div>
    </div>
  );
}

export default Actions;
