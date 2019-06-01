import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './css/Rounter.css';
import { Col, Row } from 'antd'

import Home from './features/home/Home'
import Compare from './features/compare/Compare'
import Compare2 from './features/compare/Compare2'
import Review from './features/review/Review'
import Brand from './features/select/Brand'
import SearchInput from './features/search/Search'


import logo from './asset/icon/mylogo.png'

class Rounter extends Component {

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="menu" align="middle" style={{ width: "70%" }}>
            {/* <Link to="/">Home</Link> */}
            {/* <Link to="/compare">Compare</Link>
            <Link to="/brand">Brand</Link>
            <Link to="/review">Review</Link> */}
          </Col>
        </Row>
        <div className="submenu">
          <Row gutter={24}>
            <Col style={{marginTop:"15px",marginLeft:"15px"}} span={4}><Link to="/"><img style={{height: "50px" }} src={logo} alt="logo" /></Link></Col>
            <Col span={15}>
              <SearchInput />
            </Col>
            <Col style={{ margin: "15px" }}>
              <Link>Login</Link>
              <Link>Reginster</Link>
            </Col>
          </Row>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/compare" component={Compare} />
          <Route path="/compare2" component={Compare2} />
          <Route path="/brand" component={Brand} />
          <Route path="/review" component={Review} />
        </Switch>
        <br />
        <br />
        <br />
        <br />
      </React.Fragment>
    )
  }
}


export default Rounter;
