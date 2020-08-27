import React, {Component} from 'react'
import {List} from 'antd';
import CargoDistributionItem from "../CargoDistributionItem";
import {connect} from "react-redux";
import * as _ from "lodash";

class CargoDistributionList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('CargoDistributionList', this.props.selectedCargos)
    }

    buildDisplayCargoInfos = () => {
        let selectedCargos = this.props.selectedCargos;
        let map = new Map();
        _.forEach(selectedCargos, (item, index) => {
            if (item.number !== 0) {
                if (map.get(item.type) === undefined) {
                    map.set(item.type, {
                        type: item.type,
                        details: [
                            {
                                portCode: item.portCode,
                                number: item.number
                            }
                        ]
                    })
                } else {
                    let displayInfo = map.get(item.type);
                    let details = displayInfo.details;
                    for (let i = 0; i < details.length; i++) {
                        let detail = details[i];
                        if (detail.portCode === item.portCode) {
                            detail.number = item.number;
                            details[i] = detail;
                            break;
                        } else if (detail.portCode !== item.portCode) {
                            details.push({
                                portCode: item.portCode,
                                number: item.number
                            });
                            break;
                        }
                    }
                }
            }
        });
        let result = [];
        for (let key of map.keys()) {
            result.push(map.get(key));
        }
        console.log('map', map);
        console.log('result', result);
        return result
    };

    render() {
        return (
            <div>
                <List
                    size="large"
                    dataSource={this.buildDisplayCargoInfos()}
                    renderItem={(item, index) => <CargoDistributionItem cargoInfo={item} key={index}/>}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {selectedCargos: state.cargoReducer.selectedCargos}
};

export default connect(mapStateToProps, null)(CargoDistributionList);
