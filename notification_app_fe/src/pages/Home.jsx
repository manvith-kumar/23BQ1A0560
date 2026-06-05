import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotificationList from "../components/NotificationList";
import { getNotifications } from "../services/notificationService";
import { Log } from "../utils/logger";

function Home() {

  const [notifications, setNotifications] =
    useState([]);

  const [page, setPage] =
    useState(1);

  const [filter, setFilter] =
    useState("All");

  useEffect(() => {

    Log(
      "frontend",
      "info",
      "page",
      "Home page loaded"
    );

    loadNotifications();

  }, [page, filter]);

  const loadNotifications =
    async () => {

      try {

        Log(
          "frontend",
          "info",
          "api",
          `Fetching notifications page=${page} filter=${filter}`
        );

        const data =
          await getNotifications(
            page,
            10,
            filter
          );

        setNotifications(data);

        Log(
          "frontend",
          "info",
          "state",
          `Loaded ${data.length} notifications`
        );

      } catch (error) {

        Log(
          "frontend",
          "error",
          "api",
          error.message
        );

      }
    };

  const handleFilterChange =
    (type) => {

      Log(
        "frontend",
        "info",
        "component",
        `Filter changed to ${type}`
      );

      setFilter(type);
    };

  const nextPage = () => {

    Log(
      "frontend",
      "info",
      "component",
      `Moved to page ${page + 1}`
    );

    setPage(page + 1);
  };

  const previousPage = () => {

    Log(
      "frontend",
      "info",
      "component",
      `Moved to page ${page - 1}`
    );

    setPage(page - 1);
  };

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
        onClick={() =>
          handleFilterChange("All")
        }
      >
        All
      </button>

      <button
        onClick={() =>
          handleFilterChange("Placement")
        }
      >
        Placement
      </button>

      <button
        onClick={() =>
          handleFilterChange("Result")
        }
      >
        Result
      </button>

      <button
        onClick={() =>
          handleFilterChange("Event")
        }
      >
        Event
      </button>

      <br />
      <br />

      <NotificationList
        data={notifications}
      />

      <br />

      <button
        onClick={previousPage}
        disabled={page === 1}
      >
        Previous
      </button>

      <span>
        {" "}Page {page}{" "}
      </span>

      <button
        onClick={nextPage}
      >
        Next
      </button>

    </div>
  );
}

export default Home;