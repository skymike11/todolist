import React, {Component} from 'react'
import {Col, Row} from "antd";
import './index.css'

class CargoDistributionItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ['Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.']
        }
    }

    render() {
        return (
            <div style={{width: "100%", textAlign: "center"}}>
                <Row>
                    <Col className="gutter-row" span={12}>
                        <div className="cargo-type">20GP</div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div>
                            <p className="info">YAT01 : 20</p>
                            <p className="info">YAT01 : 20</p>
                        </div>
                        <div>
                            <p className="info">总价 : 20</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CargoDistributionItem