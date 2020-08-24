import React from "react";
import { MyComponent } from "../../features/base/mycomponent";
import { withRouter } from "react-router";
import { SpacePayloadComponent } from "../components/payload/payload.compnent";

class HomePageComp extends MyComponent {

    render() {
        return <div>
            <SpacePayloadComponent></SpacePayloadComponent>
        </div>
    }

}
export const PayloadPage = withRouter(HomePageComp);
