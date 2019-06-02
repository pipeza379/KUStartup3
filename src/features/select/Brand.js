import React, { Component } from 'react'
import { Col, Row, Button } from 'antd'
import './brand.css'
import { Link, Switch, Route } from 'react-router-dom'
import Product from './Product'

import ban1 from '../../asset/icon/brand/1.jpg'
import ban2 from '../../asset/icon/brand/2.jpg'
import ban3 from '../../asset/icon/brand/3.jpg'
import ban4 from '../../asset/icon/brand/4.jpg'
import ban5 from '../../asset/icon/brand/5.jpg'
import ban6 from '../../asset/icon/brand/6.jpg'
import ban7 from '../../asset/icon/brand/7.jpg'
import ban8 from '../../asset/icon/brand/8.jpg'
import ban9 from '../../asset/icon/brand/9.jpg'
import ban10 from '../../asset/icon/brand/10.jpg'
import ban11 from '../../asset/icon/brand/11.jpg'
import ban12 from '../../asset/icon/brand/12.jpg'
import ban13 from '../../asset/icon/brand/13.jpg'
import ban14 from '../../asset/icon/brand/14.jpg'
import ban15 from '../../asset/icon/brand/15.jpg'
import ban16 from '../../asset/icon/brand/16.jpg'



class Brand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkClick: true
    }
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/brand/product" component={Product} />
        </Switch>
        {this.state.checkClick &&
          <div style={{ marginLeft: "15%", marginRight: "15%" }}>
            <Row >
              <Col align="middle">
                <h1 style={{ color: "#707070" }}>เลือกแบรนด์</h1>
              </Col>
            </Row>
            <Row gutter={24}>
              {/* this.props.type */}
              <Col align="left" span={12} ><h2 style={{ color: "#DE648B" }}>Moisturizer</h2></Col>
              <Col align="right" span={12} ><button className="btn-product">ดูผลิตภัณฑ์ทั้งหมด</button></Col>
            </Row>
            <Row className="row">
              <div style={{ border: "1px solid black" }}>
                <Row gutter={24}>
                  <Col align="middle" span={6}><img className="ban" src={ban1} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban2} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban3} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban4} /></Col>
                </Row>
                <Row gutter={24}>
                  <Col align="middle" span={6}><img className="ban" src={ban5} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban6} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban7} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban8} /></Col>
                </Row>
                <Row gutter={24}>
                  <Col align="middle" span={6}><img className="ban" src={ban9} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban10} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban11} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban12} /></Col>
                </Row>
                <Row gutter={24}>
                  <Col align="middle" span={6}><img className="ban" src={ban13} /><input type="checkbox"/></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban14} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban15} /></Col>
                  <Col align="middle" span={6}><img className="ban" src={ban16} /></Col>
                </Row>
                <Row>
                  <Col style={{ margin: "15px" }} align="middle" >
                    <Button className="btn-select" style={{ backgroundColor: "#9FBFCC", border: "none" }} onClick={() => this.setState(() => { this.setState({ checkClick: false }) })} type="primary" shape="round" size="large"><Link to="/brand/product"><h4>เลือกแบรนด์</h4></Link>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Row>
          </div>
        }
      </React.Fragment>
    )
  }
}


export default Brand;
