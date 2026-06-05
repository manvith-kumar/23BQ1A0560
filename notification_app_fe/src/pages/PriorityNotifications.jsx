import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotificationList from "../components/NotificationList";
import { getNotifications } from "../services/notificationService";
import { Log } from "../utils/logger";

function PriorityNotifications() {

  const [notifications,
    setNotifications] =
      useState([]);

  useEffect(() => {

    loadPriorityNotifications();

    Log(
      "frontend",
      "info",
      "page",
      "Priority Notifications Loaded"
    );

  }, []);

  const loadPriorityNotifications =
    async () => {

      const data =
        await getNotifications(
          1,
          10,
          "Placement"
        );

      setNotifications(data);
    };

  return (
    <div>

      <h1>
        Priority Notifications
      </h1>

      <Link to="/">
        Back Home
      </Link>

      <NotificationList
        data={notifications}
      />

    </div>
  );
}

export default PriorityNotifications;