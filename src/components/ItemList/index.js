import React, { Component } from "react";
import { Table, Tag, Button } from "antd";

const { Column } = Table;

class ItemList extends Component {
  handleDeleteItem = (recorder) => {
    const { onDelete } = this.props;
    onDelete(recorder.id);
  };
  handleFinishItem = (recorder) => {
    const { onFinish } = this.props;
    onFinish(recorder.id, recorder.status);
  };

  operateCell = (text, recorder) => {
    switch (recorder.status) {
      case false:
        return (
          <div>
            <Button
              type="primary"
              shape="round"
              size={"small"}
              onClick={() => {
                this.handleFinishItem(recorder);
              }}
            >
              {" "}
              Done
            </Button>{" "}
            <Button
              type="primary"
              shape="round"
              size={"small"}
              onClick={() => {
                this.handleDeleteItem(recorder);
              }}
            >
              Delete
            </Button>
          </div>
        );
      default:
        return (
          <Button
            type="primary"
            shape="round"
            size={"small"}
            onClick={() => {
              this.handleDeleteItem(recorder);
            }}
          >
            Delete
          </Button>
        );
    }
  };

  render() {
    //todo
    return (
      <div style={{ alignItems: "center", marginTop: "50px" }}>
        <Table
          dataSource={this.props.items}
          style={{ width: "30%", margin: "0 auto" }}
          rowKey={(record) => record.id}
        >
          <Column
            title="Id"
            dataIndex="backupNo"
            render={(text, item, index) => <span>{index + 1}</span>}
          />
          <Column
            title="Content"
            dataIndex="content"
            style={{ width: "180px" }}
          />
          <Column
            title="Status"
            dataIndex="status"
            render={(text, recorder) => {
              if (recorder.status === true) {
                return (
                  <Tag color={"green"} key={"Finish"}>
                    Finish
                  </Tag>
                );
              } else {
                return (
                  <Tag color={"red"} key={"UnFinish"}>
                    UnFinish
                  </Tag>
                );
              }
            }}
          />
          <Column
            title="Options"
            dataIndex="operate"
            render={(text, recorder) => this.operateCell(text, recorder)}
          />
        </Table>
        {/*{this.props.items.map((item, index) =>*/}
        {/*    <Item item={item} key={index} index={index} onDelete={this.props.onDelete}*/}
        {/*          onFinish={this.props.onFinish}/>)}*/}
      </div>
    );
  }
}
//todo render use jsx
export default ItemList;
