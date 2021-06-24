import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import RouteConfig from "./router/config"
import { StoreContext, store } from 'stores/index';

process.env.NODE_ENV === "development" && require("mock")

const App = () => {
    return (
        <StoreContext.Provider value={store}>
            <Router>
                <Switch>
                    {renderRoutes(RouteConfig)}
                </Switch>
            </Router>
        </StoreContext.Provider>
    );
};

export default App;
