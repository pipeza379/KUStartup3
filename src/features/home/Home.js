import React, { Component } from 'react'
import { Row, Col, Carousel, Button } from 'antd'
import { Link, Switch, Route } from 'react-router-dom'

import SearchInput from '../search/Search'
import Compare from '../compare/Compare'
import Brand from '../select/Brand'

import 'antd/dist/antd.css';
import './home.css'


import nightcream from '../../asset/icon/night-cream.svg'


class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/compare" component={Compare} />
          <Route path="/brand" component={Brand} />
        </Switch>
        <Row>
          <Col style={{ margin: "15px" }} align="middle">
            <Carousel autoplay>
              <div className="slide1">
                <h3>1</h3>
              </div>
              <div className="slide2">
                <h3>2</h3>
              </div>
              <div className="slide3">
                <h3>3</h3>
              </div>
              <div className="slide4">
                <h3>4</h3>
              </div>
            </Carousel>
          </Col>
        </Row>
        <br />
        <Row>
          <Col align="middle"><h1>COMPARE</h1></Col>
        </Row>
        <Row>
          <div style={{ width: "50%", backgroundColor: "grey", marginLeft: "25%" }}>
            <Row gutter={16}>
              <Col span={11}>
                <SearchInput />
              </Col>
              <Col span={11}>
                <SearchInput />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={11}>
                <SearchInput />
              </Col>
              <Col span={11}>
                <SearchInput />
              </Col>
            </Row>
            <Row>
              <Col align="middle" >
                <Button onClick={() => this.setState({ compare: true })} type="primary" shape="round" icon="download" size="large">
                <Link to="/compare">เปรียบเทียบ</Link>
                </Button>
              </Col>
            </Row>
            <br />
          </div>
        </Row>
        <div className="select">
          <Row>
            <Col align="middle"><h1>SELECT</h1></Col>
          </Row>
          <Row gutter={16}>
            <Col span={3} ><Link to="/brand"><img src={nightcream} alt="select" /></Link></Col>
            <Col span={3} ><Link to="/brand"><img src={nightcream} alt="select" /></Link></Col>
            <Col span={3} ><Link to="/brand"><img src={nightcream} alt="select" /></Link></Col>
            <Col span={3} ><Link to="/brand"><img src={nightcream} alt="select" /></Link></Col>
            <Col span={3} ><Link to="/brand"><img src={nightcream} alt="select" /></Link></Col>
            <Col span={3} ><Link to="/brand"><img src={nightcream} alt="select" /></Link></Col>
            <Col span={3} ><Link to="/brand"><img src={nightcream} alt="select" /></Link></Col>
            <Col span={3} ><Link to="/brand"><img src={nightcream} alt="select" /></Link></Col>
          </Row>
        </div>
        <div className="hotitem">
          <Row>
            <Col align="middle"><h1>HOTITME</h1></Col>
          </Row>
          <Row gutter={32}>
            <Col span={4} ><Link to="/compare"><img src={nightcream} alt="item" /></Link></Col>
            <Col span={4} ><Link to="/compare"><img src={nightcream} alt="item" /></Link></Col>
            <Col span={4} ><Link to="/compare"><img src={nightcream} alt="item" /></Link></Col>
            <Col span={4} ><Link to="/compare"><img src={nightcream} alt="item" /></Link></Col>
            <Col span={4} ><Link to="/compare"><img src={nightcream} alt="item" /></Link></Col>
            <Col span={4} ><Link to="/compare"><img src={nightcream} alt="item" /></Link></Col>
          </Row>
        </div>
        <div className="content">
          <Row>
            <Col align="middle"><h1>CONTENT</h1></Col>
          </Row>
          <div>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ background: "grey", height: "100px", margin: "10px" }}></div>
              </Col>
              <Col span={12}>
                <div style={{ background: "grey", height: "100px", margin: "10px" }}></div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ background: "grey", height: "100px", margin: "10px" }}></div>
              </Col>
              <Col span={12}>
                <div style={{ background: "grey", height: "100px", margin: "10px" }}></div>
              </Col>
            </Row>
            <Row>
              <Col align="middle" >
                <Button onClick={() => this.setState({ compare: true })} type="primary" shape="round" icon="download" size="large">
                  อ่านเพิ่มเติม
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
