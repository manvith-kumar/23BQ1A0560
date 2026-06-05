import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/priority"
          element={
            <PriorityNotifications />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App; 