import React, { Component } from 'react'
import Filter from './Filter'
import Comparing from './Comparing'
import { Col, Row, Table, Button } from 'antd'
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../home/Home'

import item1 from '../../asset/icon/compare/item1.svg'
import item2 from '../../asset/icon/compare/item2.svg'
import item3 from '../../asset/icon/compare/item3.svg'
import item4 from '../../asset/icon/compare/item4.svg'

import star1 from '../../asset/icon/compare/star1.svg'
import star2 from '../../asset/icon/compare/star2.svg'

import price from '../../asset/icon/compare/shop.png'
import price2 from '../../asset/icon/compare/shop2.png'
import price3 from '../../asset/icon/compare/shop3.png'
import price4 from '../../asset/icon/compare/shop4.png'

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
                <th scope="col"><img style={{ width: "150px" }} src={item1} /></th>
                <th scope="col"><img style={{ width: "150px" }} src={item2} /></th>
                <th scope="col"><img style={{ width: "150px" }} src={item3} /></th>
                <th scope="col"><img style={{ width: "150px" }} src={item4} /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">แบรนด์</th>
                <td>SK-II</td>
                <td>BIOTHERM</td>
                <td>Estee Lauder</td>
                <td>it’ skin</td>
              </tr>
              <tr>
                <th scope="row">ความนิยม</th>
                <td><img style={{ height: "20px" }} src={star1} /></td>
                <td><img style={{ height: "20px" }} src={star2} /></td>
                <td><img style={{ height: "20px" }} src={star1} /></td>
                <td><img style={{ height: "20px" }} src={star2} /></td>
              </tr>
              <tr>
                <th scope="row">ชื่อผลิตภัณฑ์</th>
                <td>SK-II Facial Treatment Essence</td>
                <td>BIOTHERM Life Plankton Essence</td>
                <td>ESTEE LAUDER Advanced Night Repair Synchronized Recovery Complex II</td>
                <td>It's Skin Power 10 Formula VC Effecto</td>
              </tr>
              <tr>
                <th scope="row">ประเภท</th>
                <td>เซรั่ม</td>
                <td>เซรั่ม</td>
                <td>เซรั่ม</td>
                <td>เซรั่ม</td>
              </tr>
              <tr>
                <th scope="row">คุณสมบัติ</th>
                <td>1.ช่วยฟื้นฟูผิวของคุณให้กระจ่างใสเรียบเนียน 2.กระชับพร้อมเปล่งประกายผิวสวย 3ิ.เป็นเกราะป้องกันผิวจาก มลภาวะ</td>
                <td>1.ช่วยให้ผิวแข็งแรง ซึมซาบเร็ว ไม่เหนียวเหนอะหนะ 2.ชุ่มชื่นขึ้นทันทีที่ใช้ดูกระจ่างใสขึ้น 3.ให้ผิวสดชื่นกระชับ รูขุมขนให้เล็กลงอย่างเห็นได้ชัด</td>
                <td>1.ช่วยให้ผิวอ่อนเยาว์ 2.กระชับผิว เพิ่มความชุ่มชื่น</td>
                <td>1.กระชับรูขุมขน 2.ความหมองคล้ำรอยจุดด่างดำ 3.กระจ่างใสให้ผิวหน้า</td>
              </tr>
              <tr>
                <th scope="row">เหมาะสำหรับผิวประเภท</th>
                <td>ทุกสภาพผิว</td>
                <td>ทุกสภาพผิว</td>
                <td>ผิวแห้งริ้วรอย</td>
                <td>ทุกสภาพผิว</td>
              </tr>
              <tr>
                <th scope="row">วิธีการ</th>
                <td>1.หยดBIOTHERM Life
ลงบนสำลีแผ่น
2.ลูบเบาๆให้ทั่วผิวหน้าแล
ะลำคอ
ประมาณ 1 นาที</td>
                <td>1.หยด ESTEE
LAUDER
ลงบนสำลีแผ่น
2.ลูบเบาๆให้ทั่วผิวห
น้าและลำคอ
ประมาณ 1 นาที</td>
                <td>1.หยด It's Skin
Power
ลงบนสำลีแผ่น
2.ลูบเบาๆให้ทั่วผิวห
น้าและลำคอ
ประมาณ 1 นาที</td>
                <td>1.หยด Facial
Treatment
Essence
ลงบนสำลีแผ่น
2.ลูบเบาๆให้ทั่วผิวห
น้าและลำคอ
ประมาณ 1 นาที</td>
              </tr>
              <tr>
                <th scope="row">ปริมาตร</th>
                <td>75 ml</td>
                <td>125 ml</td>
                <td>75 ml</td>
                <td>30 ml</td>
              </tr>
              <tr>
                <th scope="row">ราคา</th>
                <td><img style={{ width: "230px" }} src={price} /></td>
                <td><img style={{ width: "230px" }} src={price2} /></td>
                <td><img style={{ width: "230px" }} src={price3} /></td>
                <td><img style={{ width: "230px" }} src={price4} /></td>
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
