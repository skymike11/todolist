import React, { Component } from "react";
import { Col, Row } from "antd";
import "./index.css";

class CargoDistributionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.cargoInfo.details,
    };
    console.log("this.props.cargoInfo.details", this.props.cargoInfo.details);
  }

  count = (e) => {
    let data = this.props.cargoInfo.details;
    let count = 0;
    for (let item of data) {
      console.log(item);
      count += item.number;
    }
    console.log(count);
    return count;
  };

  render() {
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <Row>
          <Col className="gutter-row" span={12}>
            <div className="cargo-type">{this.props.cargoInfo.type}</div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div>
              {this.props.cargoInfo.details.map((item, index) => {
                return (
                  <p className="info">
                    {" "}
                    {item.portCode} : {item.number}
                  </p>
                );
              })}
            </div>
            <div>
              <p className="info">总数 : {this.count()}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CargoDistributionItem;
