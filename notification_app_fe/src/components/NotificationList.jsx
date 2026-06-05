import { useState } from "react";
import { Log } from "../utils/logger";

function NotificationList({ data }) {

  const [notifications, setNotifications] =
    useState(data);

  const handleClick = (id) => {

    const updatedNotifications =
      notifications.map((item) => {

        if (item.id === id) {

          Log(
            "frontend",
            "info",
            "notification",
            `${item.type} notification opened`
          );

          return {
            ...item,
            read: true
          };
        }

        return item;
      });

    setNotifications(updatedNotifications);
  };

  return (
    <div>

      {notifications.map((item) => (

        <div
          key={item.id}
          onClick={() => handleClick(item.id)}
          style={{
            cursor: "pointer",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid gray",
            backgroundColor:
              item.read
                ? "#f0f0f0"
                : "#d4ffd4"
          }}
        >

          <h3>{item.type}</h3>

          <p>{item.message}</p>

          <small>{item.timestamp}</small>

          <br />

          <strong>
            {item.read
              ? "Read"
              : "Unread"}
          </strong>

        </div>

      ))}

    </div>
  );
}

export default NotificationList;