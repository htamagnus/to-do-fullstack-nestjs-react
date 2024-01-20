import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"/>
                <App />
            </Switch>
        </BrowserRouter>   
    )
}