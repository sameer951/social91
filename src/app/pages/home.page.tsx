import React from "react";
import { MyComponent } from "../../features/base/mycomponent";
import { withRouter } from "react-router";

class HomePageComp extends MyComponent {
    
    render() {
        return <div>
            Home Page Working!!
            {JSON.stringify(this.props?.match?.params)}
        </div>
    }

}
export const HomePage = withRouter(HomePageComp);
