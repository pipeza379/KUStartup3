import React, { Component } from 'react'
import Filter from './Filter'
import Comparing from './Comparing'
import Home from '../home/Home'
import { Link, Switch, Route } from 'react-router-dom'
import { Col, Row, Table, Button } from 'antd'

import item2 from '../../asset/icon/compare/item2.svg'

import star2 from '../../asset/icon/compare/star2.svg'

import price2 from '../../asset/icon/compare/shop2.png'

class Compare extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="compare">
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"><img style={{ width: "150px" }} src={item2} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">แบรนด์</th>
                                <td>BIOTHERM</td>
                            </tr>
                            <tr>
                                <th scope="row">ความนิยม</th>
                                <td><img style={{ height: "20px" }} src={star2} /></td>
                            </tr>
                            <tr>
                                <th scope="row">ชื่อผลิตภัณฑ์</th>
                                <td>BIOTHERM Life Plankton Essence</td>
                            </tr>
                            <tr>
                                <th scope="row">ประเภท</th>
                                <td>เซรั่ม</td>
                            </tr>
                            <tr>
                                <th scope="row">คุณสมบัติ</th>
                                <td>1.ช่วยให้ผิวแข็งแรง ซึมซาบเร็ว ไม่เหนียวเหนอะหนะ 2.ชุ่มชื่นขึ้นทันทีที่ใช้ดูกระจ่างใสขึ้น 3.ให้ผิวสดชื่นกระชับ รูขุมขนให้เล็กลงอย่างเห็นได้ชัด</td>
                            </tr>
                            <tr>
                                <th scope="row">เหมาะสำหรับผิวประเภท</th>
                                <td>ทุกสภาพผิว</td>
                            </tr>
                            <tr>
                                <th scope="row">วิธีการ</th>
                                <td>1.หยด ESTEE
                LAUDER
                ลงบนสำลีแผ่น
                2.ลูบเบาๆให้ทั่วผิวห
                น้าและลำคอ
ประมาณ 1 นาที</td>
                            </tr>
                            <tr>
                                <th scope="row">ปริมาตร</th>
                                <td>125 ml</td>
                            </tr>
                            <tr>
                                <th scope="row">ราคา</th>
                                <td><img style={{ width: "230px" }} src={price2} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <Row>
                        <Col align="middle" >
                            <br />
                            <Button style={{ backgroundColor: "#9FBFCC", border: "none" }} onClick={() => this.setState({ other: true })} type="primary" shape="round" size="large">
                            <Link to="/"><h5 style={{ color: "black" }}>เปรียบเทียบสินค้าอื่น</h5></Link>
                            </Button>
                        </Col>
                    </Row>
                </div>
                {/* <div className="compare">
          <Table columns={columns} dataSource={data} bordered size="middle"/>


          <Row><Filter /></Row>
          <Row><Comparing /></Row>
        </div> */}
            </React.Fragment>
        )
    }
}

export default Compare;
