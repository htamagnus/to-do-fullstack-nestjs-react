import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { App } from "../App";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"/>
                <App />
                <Route path="*">
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </BrowserRouter>   
    )
}