import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './css/Rounter.css';
import { Col, Row } from 'antd'

import Home from './features/home/Home'
import Compare from './features/compare/Compare'
import Review from './features/review/Review'
import Rank from './features/rank/Rank'
import SearchInput from './features/search/Search'
class Rounter extends Component {

  render() {
    return (

      <React.Fragment>
        <Row>
          <Col className="menu" style={{ marginLeft: "15%", marginRight: "15%", width: "70%" }}>
            <Link to="/">Home</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/rank">Rank</Link>
            <Link to="/review">Review</Link>
          </Col>
        </Row>
        <div className="submenu">
          <Row gutter={24}>
            <Col span={4} />
            <Col span={15}>
              <SearchInput />
            </Col>
            <Col span={3}>
              <Link>Login</Link>
              <Link>Reginster</Link>
            </Col>
          </Row>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/compare" component={Compare} />
          <Route path="/rank" component={Rank} />
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
