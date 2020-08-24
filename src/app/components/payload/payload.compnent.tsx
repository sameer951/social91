import React from "react";
import { MyComponent } from "../../../features/base/mycomponent";
import { connect } from 'react-redux';
import { Table } from "antd";
import { PayloadReduces } from "../../../features/redux/payload/payload.reducer";
import { payloadActions } from "../../../features/redux/payload/payload.actions";

class SpacePayload extends MyComponent {

    columns = [
        { title: '#', dataIndex: '#', key: '#', },
        { title: 'ID', dataIndex: 'payload_id', key: 'payload_id', },
        { title: 'Nationality', dataIndex: 'nationality', key: 'nationality', },
        { title: 'Details', dataIndex: 'details', key: 'details', },
        { title: 'Customers', dataIndex: 'customers', key: 'customers', },
        { title: 'Orbit Details', dataIndex: 'orbit', key: 'orbit', },
    ];
    componentDidMount() {
        this.props.fetchPayloadSpaceData();
    }
    getFlightDetails(data, index) {
        return <React.Fragment key={index + data.payload_id}>
            <div>
                Manufacturer:{data?.manufacturer} <br />
            Type:{data?.payload_type} <br />
            Mass  <br />
            In KGS: {data?.payload_mass_kg} kg, In LBS : {data?.payload_mass_lbs} lbs <br />
            </div>
        </React.Fragment>
    }
    getOrbitDetails(data, index) {
        return <React.Fragment key={index + data.payload_id}>
            <div>
                Reference System:{data?.reference_system} <br />
            Type:{data?.payload_type} <br />
            Periapsis In KGS: {data?.periapsis_km} km<br />
            Apoapsis Km:{data?.apoapsis_km} Km <br />
            Inclination Deg:{data?.inclination_deg} <br />
            </div>
        </React.Fragment>
    }
    render() {
        let dataSource = null;
        dataSource = [...(this.props.payload?.spaceDataList || [])].map((data, index) => {
            let UI = { ...data, key: index + 'invoiceList' };
            UI['#'] = index+1;
            UI.details = this.getFlightDetails(data, index);
            UI.orbit = this.getOrbitDetails(data?.orbit_params, index);
            return UI;
        });
        return <div>
            <Table dataSource={dataSource} columns={this.columns} />
            {/* Hi {JSON.stringify(this.props.past?.spaceDataList)} */}
        </div>
    }

}
export const SpacePayloadComponent = connect(PayloadReduces, payloadActions)(SpacePayload);
