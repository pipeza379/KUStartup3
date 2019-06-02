import React, { Component } from 'react'
import { Row, Col, Carousel, Button } from 'antd'
import { Link, Switch, Route } from 'react-router-dom'

import SearchInput from '../search/Search'
import Compare from '../compare/Compare'
import Brand from '../select/Brand'
import Compare2 from '../compare/Compare2'

import 'antd/dist/antd.css';
import './home.css'


import moisturizer from '../../asset/icon/home/select/moisturizer.svg'
import nightcream from '../../asset/icon/home/select/night-cream.svg'
import toner from '../../asset/icon/home/select/toner.svg'
import foam from '../../asset/icon/home/select/foam.svg'
import mask from '../../asset/icon/home/select/mask.svg'
import sunscreen from '../../asset/icon/home/select/sunscreen.svg'
import oil from '../../asset/icon/home/select/oil.svg'
import beauty from '../../asset/icon/home/select/beauty.svg'

import item1 from '../../asset/icon/home/hotitem/hotitem1.png'
import item2 from '../../asset/icon/home/hotitem/hotitem2.png'
import item3 from '../../asset/icon/home/hotitem/hotitem3.png'
import item4 from '../../asset/icon/home/hotitem/hotitem4.png'
import item5 from '../../asset/icon/home/hotitem/hotitem5.png'
import item6 from '../../asset/icon/home/hotitem/item6.svg'

import slide from '../../asset/icon/home/banner1.PNG'
import slide2 from '../../asset/icon/home/banner4.png'
import slide3 from '../../asset/icon/home/banner2.png'
import slide4 from '../../asset/icon/home/banner3.png'

import rev from '../../asset/icon/home/review/1.PNG'
import rev2 from '../../asset/icon/home/review/2.PNG'
import rev3 from '../../asset/icon/home/review/3.PNG'
import rev4 from '../../asset/icon/home/review/4.PNG'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      other: false
    }
  }
  render() {
    return (
      <div className="body">
        <Switch>
          <Route path="/compare" component={Compare} />
          <Route path="/compare2" component={Compare2} />
          <Route path="/brand" component={Brand} />
        </Switch>
        <Row style={{ margin: "15px", width: "70%", marginLeft: "15%", marginRight: "15%" }} >
          <Col align="middle">
            <Carousel autoplay={true}>
            <div className="slide2">
                <img style={{width:"1300px"}} src={slide2} />
              </div>
              <div className="slide1">
                <img style={{width:"1300px"}} src={slide3} />
              </div>
              <div className="slide3">
                <img style={{width:"1300px"}} src={slide4} />
              </div>
              <div className="slide4">
                <img style={{width:"1300px"}} src={slide} />
              </div>
            </Carousel>
          </Col>
        </Row>
        <br />
        <Row>
          <Col align="middle"><h1 style={{color:"#DE648B", margin: "20px" }}>COMPARE SKIN CARE</h1></Col>
        </Row>
        <Row >
          <div style={{ backgroundColor: "#DCF2F0", margin: "15px", width: "70%", marginLeft: "15%", marginRight: "15%" ,borderRadius:"5px"}}>
            <Row gutter={16}>
              <Col align="middle" style={{width:"40%", margin: "15px", marginBottom: "0",marginLeft:"7%" }} span={11}>
                <SearchInput/>
              </Col>
              <Col align="middle" style={{width:"40%", margin: "15px", marginBottom: "0"}} span={11}>
                <SearchInput />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col align="middle" style={{width:"40%", marginLeft: "15px", marginRight: "15px",marginLeft:"7%"  }} span={11}>
                <SearchInput />
              </Col>
              <Col align="middle" style={{width:"40%", marginLeft: "15px", marginRight: "15px" }} span={11}>
                <SearchInput />
              </Col>
            </Row>
            <Row>
            <br/>
              <Col align="middle" >
                <Button className="btn-compare" style={{width:"20%", backgroundColor: "#FBDDDD", border: "none" }} onClick={() => this.setState({ compare: true })} type="primary" shape="round" size="large">
                  <Link to="/compare"><h5 style={{color: "black" }}>เปรียบเทียบ</h5></Link>
                </Button>
              </Col>
            </Row>
            <br />
          </div>
        </Row>
        <div className="select" >
          <Row>
            <Col align="middle"><h1 style={{color:"#DE648B", margin: "20px" }}>CATEGORIES</h1></Col>
          </Row>
          <Row gutter={16}>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={foam} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={toner} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={oil} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={nightcream} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={beauty} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={mask} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={moisturizer} alt="select" /></div></Link></Col>
            <Col span={3} ><Link to="/brand"><div className="box"><img className="center" src={sunscreen} alt="select" /></div></Link></Col>
          </Row>
          <Row gutter={16}>
            <Col span={3} ><Link to="/brand"><h4 style={{textAlign:"center"}}>Foam</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{textAlign:"center"}}>Toner</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{textAlign:"center"}}>Oil</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{textAlign:"center"}}>Nightcream</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{textAlign:"center"}}>Beauty</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{textAlign:"center"}}>Mask</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{textAlign:"center"}}>Moisturizer</h4></Link></Col>
            <Col span={3} ><Link to="/brand"><h4 style={{textAlign:"center"}}>Sunscreen</h4></Link></Col>
          </Row>
          <br/>
        </div>
        <Row>
          <Col align="middle"><h1 style={{color:"#DE648B", margin: "20px" }}>HOT ITEMS</h1></Col>
        </Row>
        <div className="hotitem">
          <Row gutter={32}>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item1} className="ch" alt="item" /></div></Link></Col>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item2} className="ch" alt="item" /></div></Link></Col>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item3} className="ch" alt="item" /></div></Link></Col>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item4} className="ch" alt="item" /></div></Link></Col>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item5} className="ch" alt="item" /></div></Link></Col>
            <Col span={4} ><Link to="/compare2"><div className="box2"><img src={item6} className="ch" alt="item" /></div></Link></Col>
          </Row>
        </div>
        <br/>
        <div className="content">
          <Row>
            <Col align="middle"><h1 style={{color:"#DE648B", margin: "20px" }}>BLOG</h1></Col>
          </Row>
          <div>
            <Row gutter={16}>
              <Col align="right" span={12}>
                <img src={rev} />
                {/* <div style={{ background: "grey", height: "100px", margin: "10px", width: "60%" }}></div> */}
              </Col>
              <Col align="left" span={12}>
                <img src={rev2} />
                {/* <div style={{ background: "grey", height: "100px", margin: "10px", width: "60%" }}></div> */}
              </Col>
            </Row>
            <Row gutter={16}>
              <Col align="right" span={12}>
                <img src={rev3} />
                {/* <div style={{ background: "grey", height: "100px", margin: "10px", width: "60%" }}></div> */}
              </Col>
              <Col align="left" span={12}>
                <img src={rev4} style={{ width: "406px", height: "110px" }} />
                {/* <div style={{ background: "grey", height: "100px", margin: "10px", width: "60%" }}></div> */}
              </Col>
            </Row>
            <Row>
              <Col align="middle" >
                <br />
                <Button style={{ backgroundColor: "#FBDDDD",border:"none" }} onClick={() => this.setState({ other: true })} type="primary" shape="round" size="large">
                  <h5 style={{color:"black"}}>อ่านเพิ่มเติม</h5>
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
