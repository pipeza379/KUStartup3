import React, { Component } from 'react'
import { Col, Row, Button } from 'antd'
import './brand.css'
import { Link, Switch, Route } from 'react-router-dom'
import Product from './Product'

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
        {console.log(this.state)}
        <Switch>
          <Route path="/brand/product" component={Product} />
        </Switch>
        {this.state.checkClick &&
          <div>
            <Row>
              <Col align="middle">
                <h1>เลือกแบรนด์</h1>
              </Col>
            </Row>
            <Row gutter={24}>
              {/* this.props.type */}
              <Col span={12} align="left"><h2>หัวข้อ</h2></Col>
              <Col span={12} align="right"><button>ตารางทั้งหมด</button></Col>
            </Row>
            <Row>
              <div style={{ border: "1px solid black" }}>
                <Row gutter={24}>
                  <Col align="middle" span={6}><span className="dot">..</span></Col>
                  <Col align="middle" span={6}><span className="dot" /></Col>
                  <Col align="middle" span={6}><span className="dot" /></Col>
                  <Col align="middle" span={6}><span className="dot" /></Col>
                </Row>
                <Row gutter={24}>
                  <Col align="middle" span={6}><span className="dot" /></Col>
                  <Col align="middle" span={6}><span className="dot" /></Col>
                  <Col align="middle" span={6}><span className="dot" /></Col>
                  <Col align="middle" span={6}><span className="dot" /></Col>
                </Row>
                <Row>
                  <Col style={{ margin: "15px" }} align="middle" >
                    <Button onClick={() => this.setState(()=>{this.setState({checkClick:false})})} type="primary" shape="round" icon="download" size="large">
                      <Link to="/brand/product">เลือกแบรนด์</Link>
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
