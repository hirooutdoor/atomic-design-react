import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../compoenents/pages/Top";
import { Users } from "../compoenents/pages/Users";
import { DefaultLayout } from "../compoenents/templates/DefaultLayout";
import { HeaderOnly } from "../compoenents/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
