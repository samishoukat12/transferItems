import React from "react";



export const Completed = ({ items, setItems, updateStatus }) => {
  return (
    <div className="completed">
      <h1>Completed</h1>
      {items &&
        items.map((item) => {
          if (item && item.status === "Completed")
            return (
              <>
                <p className="item" key={item.id}>
                  {item.title}{" "}
                  <button
                    className="mark_pending"
                    key={item.id}
                    onClick={() => {
                      updateStatus(item.id, "Pending");
                    }}
                  >
                    Mark Pending
                  </button>
                </p>
              </>
            );
        })}
    </div>
  );
};
