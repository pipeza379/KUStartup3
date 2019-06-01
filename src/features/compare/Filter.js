import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Select, Col, Row } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import Action from '../../actions';
import * as editCardTable from '../../actions/editCardTable'
import 'antd/dist/antd.css';

import {filter} from './Filtertype'

let children = [];
filter.forEach(e => children.push(<Select.Option key={e.key}>{e.text}</Select.Option>))

const options = [
  {
    text: "data1",
    description: "descrip1",
    description2: "descrip2",
    filter: ["fil4"],
  },
  {
    text: "data2",
    description: "descrip1",
    description2: "descrip2",
    filter: ["fil2", "fil3"],
  },
  {
    text: "data3",
    description: "descrip1",
    description2: "descrip2",
    filter: ["fil1", "fil4"],
  },
  {
    text: "data4",
    description: "descrip1",
    description2: "descrip2",
    filter: ["fil2", "fil4"],
  }
]

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      value: null,
      arrayValue: [],
      allFilter: []
    };
    // this.selectMultipleOption = this.selectMultipleOption.bind(this);
  }

  componentWillUpdate(prevState,nextState){
    if(prevState.allFilter===nextState.allFilter)
      return false
  }

  selectMultipleOption(value) {
    // console.log("Val", value);
    let allFilter = []
    value.forEach(e => { allFilter.push(e.name) })
    console.log(allFilter)
    // this.props.addFilter(value.name)
    this.setState({ arrayValue: value, allFilter })
  }

  createList() {
    let table = []
    let card = []
    // if (this.props.filter !== undefined) {
    if (this.state.allFilter !== undefined) {

      let data = this.state.allFilter
      // let data = this.props.filter
      // console.log(data)
      options.forEach(e => {
        let count = 0
        for (let i = 0; i < e.filter.length; i++) {
          data.forEach(d=>{
            if(d===e.filter[i])
              count++
          })
          // let found
          // found = data.find(d => d === e.filter[i])
          // if (found !== undefined) {
          //   table.push(e)
          //   break
          // }
        }
        if(count === data.length){
          table.push(e)
          // this.props.addCard(e)    
        }
      })
      for (let i = 0; i < table.length; i++) {
        let e = table[i]
        card.push(
          <Col key={i}>
            <Card style={{ border: "1px solid black" }}>
              <Card.Content>
                <Card.Header>
                  {e.text}
                  <Icon index={i} onClick={this.props.editCardTable.removeCard.bind(this, this.props.card)} name='remove' />
                </Card.Header>
                <Card.Meta>
                  <span>{e.allFilter}</span>
                </Card.Meta>
                <Card.Description>
                  {e.description} {e.description2}
                </Card.Description>
              </Card.Content>
            </Card>
          </Col >
        )
      }
    }
    return card
  }


  render() {
    // const ftr = this.props.filter
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col md={2}>
              <h3>Filter</h3>
              {/* console.log(ftr) */}
              <Picky
                value={this.state.arrayValue}
                options={filter}
                onChange={this.selectMultipleOption.bind(this)}
                open={true}
                valueKey="id"
                labelKey="name"
                multiple={true}
                includeSelectAll={true}
                includeFilter={true}
              // dropdownHeight={600}
              />
              {/* <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={this.props.addFilter}
              >
                {children}
              </Select>, */}
            </Col>
            <Col md={8}>
              <div className="listBox" style={{ height: "500px", width: "1000px", border: "1px solid black" }}>
                <Row>
                  {this.createList()}
                </Row>
              </div>
            </Col>
          </Row>
        </div>

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  card: state.cardTable.card,
  // filter: state.cardTable.filter
})

const mapDispatchToProps = dispatch => ({
  editCardTable: bindActionCreators(editCardTable, dispatch),
  clearData: () => dispatch({ type: Action.CLEAR_DECK }),
  addCard: (deck) => dispatch({ type: Action.ADD_DECK, card: deck }),
  addFilter: (data) => dispatch({ type: Action.FILTER, filter: data.value })
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// export default Filter