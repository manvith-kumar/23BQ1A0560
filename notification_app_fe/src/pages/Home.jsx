import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotificationList from "../components/NotificationList";
import { notifications } from "../services/notificationService";
import { Log } from "../utils/logger";

function Home() {

  const [filter, setFilter] = useState("All");

  useEffect(() => {

    Log(
      "frontend",
      "info",
      "page",
      "Home page loaded"
    );

  }, []);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          item => item.type === filter
        );

  return (
    <div>

      <h1>
        Campus Notifications
      </h1>

      <Link to="/priority">
        View Priority Notifications
      </Link>

      <br />
      <br />

      <button
        onClick={() => setFilter("All")}
      >
        All
      </button>

      <button
        onClick={() => setFilter("Placement")}
      >
        Placement
      </button>

      <button
        onClick={() => setFilter("Result")}
      >
        Result
      </button>

      <button
        onClick={() => setFilter("Event")}
      >
        Event
      </button>

      <br />
      <br />

      <NotificationList
        data={filteredNotifications}
      />

    </div>
  );
}

export default Home;