import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { HomePage } from "./app/pages/home.page";
import { LayoutComp } from "./app/components/layout/layout";
import 'antd/dist/antd.css';
import { PayloadPage } from "./app/pages/payload.page";
import { HistoryPage } from "./app/pages/history.page";

export default function App() {
  return (
    <div className="App">
      <LayoutComp>
        <Switch>
          <Route exact path="/" component={withRouter((props) => {
            props.history?.push('/payloads');
            return <div></div>
          })} />
          <Route exact path="/dashboard" component={HomePage} />
          <Route path="/payloads/:id" component={PayloadPage} />
          <Route path="/payloads" component={PayloadPage} />
          <Route path="/history" component={HistoryPage} />
        </Switch>
      </LayoutComp>
    </div>
  );
}