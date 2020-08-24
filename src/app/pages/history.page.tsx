import React from "react";
import { MyComponent } from "../../features/base/mycomponent";
import { withRouter } from "react-router";
import { SpaceHistoryComponent } from "../components/history/history.compnent";

class HomePageComp extends MyComponent {


    componentDidMount() {
        // this.props.history.push("/category");
    }
    componentDidUpdate(prevProps) {
        if (prevProps?.match?.params !== this.props.match.params) {
            this.setState({ ...this.state, params: this.props.match.params });
        }
    }
    render() {
        return <div>
            <SpaceHistoryComponent></SpaceHistoryComponent>
        </div>
    }

}
export const HistoryPage = withRouter(HomePageComp);
