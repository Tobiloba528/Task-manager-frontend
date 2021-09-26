import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AuthScreen from "./screens/AuthScreens";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <div>
      <ToastContainer />
      <Switch>
        <Route path="/app" component={MainScreen} />
        <Route path={["/", "/home"]}>
          <AuthScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
