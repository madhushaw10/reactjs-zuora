import React from 'react';
import { Collapse, Table } from 'antd';

const { Panel } = Collapse;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const CPQTable = () => {
return (
  <Collapse accordion>
    <Panel header="Custom Setting 1" key="1">
      <Table dataSource={data} columns={columns} pagination={false} />
    </Panel>
    <Panel header="Custom Setting 2" key="2">
      <Table dataSource={data} columns={columns} pagination={false} />
    </Panel>
    <Panel header="Custom Setting 3" key="3">
      <Table dataSource={data} columns={columns} pagination={false} />
    </Panel>
  </Collapse>
);
};
  //return <Table columns={columns} dataSource={data} />;


export default CPQTable;
