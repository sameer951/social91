import React from "react";
import { MyComponent } from "../../../features/base/mycomponent";
import { connect } from 'react-redux';
import { HistoryReduces } from "../../../features/redux/history/history.reducer";
import { HistoryActions } from "../../../features/redux/history/history.actions";
import { Table } from "antd";

class SpaceHistory extends MyComponent {

    columns = [
        { title: 'Date', dataIndex: 'event_date_utc', key: 'event_date_utc', },
        { title: 'Title', dataIndex: 'title', key: 'title', },
        { title: 'Details', dataIndex: 'details', key: 'details', },
        { title: 'Flight NO', dataIndex: 'flight_number', key: 'flight_number', },
        { title: 'Article', dataIndex: 'article', key: 'article', },
        { title: 'Wikipedia', dataIndex: 'wikipedia', key: 'wikipedia', }
    ];
    componentDidMount() {
        this.props.fetchHistorySpaceData();
    }
    render() {
        let dataSource = null;
        dataSource = [...(this.props.past?.spaceDataList || [])].map((data, index) => {
            let UI = { ...data, key: index + 'invoiceList' };
            UI.article = <React.Fragment>
                <div className="btn btn-outline-info" onClick={() => { window.open(data?.links?.article, '_blank') }}>Check Article</div>
            </React.Fragment>
            UI.wikipedia = <React.Fragment>
                <div className="btn btn-outline-primary" onClick={() => { window.open(data?.links?.wikipedia, '_blank') }}>Wikipedia Search</div>
            </React.Fragment>
            return UI;
        });
        return <div>
            <Table dataSource={dataSource} columns={this.columns} loading={this.props?.past?.isLoading}  />
            {/* Hi {JSON.stringify(this.props.past?.spaceDataList)} */}
        </div>
    }

}
export const SpaceHistoryComponent = connect(HistoryReduces, HistoryActions)(SpaceHistory);
