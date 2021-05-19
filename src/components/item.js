import React from "react";
import { useState, useEffect } from "react";

import { Completed } from "./completed";
import { Pending } from "./pending";

export const Items = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Manage ORM for client XYZ",
      status: "Pending",
    },
    {
      id: 2,
      title: "Review Summer Intern project report",
      status: "Pending",
    },
    {
      id: 3,
      title: "Host Landing Page for Gerry Pizza Shop",
      status: "Pending",
    },
    {
      id: 4,
      title: "Release Junior Developer payment",
      status: "Completed",
    },
    {
      id: 5,
      title: "Discuss Digital Marketing requirements ",
      status: "Completed",
    },
    {
      id: 6,
      title: "Discuss technology budget with CTO",
      status: "Pending",
    },
  ]);
  const updateStatus = (id, newStatus) => {
    let allItems = items;
    allItems = allItems.map((item) => {
      if (item.id === id) {
        console.log("in here");
        item.status = newStatus;
      }
      return item;
    });
    setItems(allItems);
  };

  return (
    <div class="items">
      <Pending items={items} setItems={setItems} updateStatus={updateStatus} />
      <Completed
        items={items}
        setItems={setItems}
        updateStatus={updateStatus}
      />
    </div>
  );
};
