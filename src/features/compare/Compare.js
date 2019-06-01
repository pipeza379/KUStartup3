import React, { Component } from 'react'
import Filter from './Filter'
import Comparing from './Comparing'
import { Row, Table } from 'antd'

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  // {
  //   title: 'Action',
  //   key: 'operation',
  //   fixed: 'right',
  //   width: 100,
  //   render: () => <a href="javascript:;">action</a>,
  // },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
  {
    key:"",
    name:"",
    age: "",
    address:"",
  },
  {
    key:"",
    name:"",
    age: "",
    address:"",
  },
  {
    key:"",
    name:"",
    age: "",
    address:"",
  },
  {
    key:"",
    name:"",
    age: "",
    address:"",
  },
  {
    key:"",
    name:"",
    age: "",
    address:"",
  },
  {
    key:"",
    name:"",
    age: "",
    address:"",
  },
  {
    key:"",
    name:"",
    age: "",
    address:"",
  },
  {
    key:"",
    name:"",
    age: "",
    address:"",
  }
]

class Compare extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Row><h1>Compare</h1></Row>
          <Table columns={columns} dataSource={data} bordered size="middle"/>

          {/* <Row><Filter /></Row> */}
          <Row><Comparing /></Row>
        </div>
      </React.Fragment>
    )
  }
}

export default Compare;
