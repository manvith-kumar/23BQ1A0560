import { useEffect } from "react";
import { Link } from "react-router-dom";
import NotificationList from "../components/NotificationList";
import { notifications } from "../services/notificationService";
import { Log } from "../utils/logger";

function PriorityNotifications() {

  useEffect(() => {

    Log(
      "frontend",
      "info",
      "page",
      "Priority page loaded"
    );

  }, []);

  const priorityNotifications =
    notifications.filter(
      item => item.type === "Placement"
    );

  return (
    <div>

      <h1>
        Priority Notifications
      </h1>

      <Link to="/">
        Back Home
      </Link>

      <NotificationList
        data={priorityNotifications}
      />

    </div>
  );
}

export default PriorityNotifications;