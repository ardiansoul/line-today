import { Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./pages";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import Bookmarkpage from "./pages/Bookmarkpage";
import Topicpage from "./pages/Topicpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useContext(AppContext);

  const fetchData = async () => {
    try {
      const data = await axios.get("https://today.line.me/id/portaljson");
      dispatch({
        type: "LOAD DATA",
        payload: data.data,
      });
    } catch (err) {
      dispatch({
        type: "ERROR LOAD DATA",
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <FontAwesomeIcon icon={faCircleNotch} spin size="lg" />
        </div>
      ) : (
        <div
          className="max-w-4xl m-auto border-2 border-primary rounded my-10"
          style={{ minHeight: "600px" }}
        >
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/bookmarks" exact component={Bookmarkpage} />
            <Route path="/topics" exact component={Topicpage} />
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
