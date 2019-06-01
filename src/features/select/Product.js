import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'antd'
import { Link, Switch, Route } from 'react-router-dom'
import Compare from '../compare/Compare'
import './product.css'

import logo1 from '../../asset/icon/product/logo1.svg'
import logo2 from '../../asset/icon/product/logo2.svg'
import logo3 from '../../asset/icon/product/logo3.svg'
import logo4 from '../../asset/icon/product/logo4.svg'

import item00 from '../../asset/icon/product/00.svg'
import item01 from '../../asset/icon/product/01.svg'
import item02 from '../../asset/icon/product/02.svg'
import item03 from '../../asset/icon/product/03.svg'
import item10 from '../../asset/icon/product/10.svg'
import item11 from '../../asset/icon/product/11.svg'
import item13 from '../../asset/icon/product/13.svg'
import item21 from '../../asset/icon/product/21.svg'
import item31 from '../../asset/icon/product/31.svg'

const data = [
    {
        id: "1",
        name: "abc"
    },
    {
        id: "2",
        name: "abb"
    },
    {
        id: "3",
        name: "acb"
    }
]

const selIndex = []
for (let i = 0; i < data.length; i++)
    selIndex.push(false)

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            compare: false,
            select: selIndex,
            data: data
        }
    }

    selectCard = (data) => {
        let index = data.target.getAttribute("index")
        console.log(index)
        let check = this.state.select
        // console.log(check[index])
        check[index] = (!check[index])
        this.setState({
            select: check
        })
    }

    createCard = () => {
        let table = [], count = 0
        this.state.data.forEach(s => {
            let { name, brand, using } = s
            let cls = this.state.select[count] ? "select" : "card"
            table.push(
                <Col span={5} style={{ padding: "0", margin: "5px" }}>
                    <Card hoverable={true} className={cls} title={name} index={count} extra={<button index={count} onClick={this.selectCard.bind(this)}>X</button>} >
                        <p>{brand}</p>
                        <p>{using}</p>
                    </Card>
                </Col>
            )
            count++
        })
        return table
    }
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/compare" component={Compare} />
                </Switch>
                <h1 style={{ textAlign: "center" }}>เลือกผลิตภัณฑ์ที่คุณต้องการเปรียบเทียบ</h1>
                <br />
                <Row>
                    <Col align="middle">
                        <table>
                            <tr className="head" style={{ backgroundColor: "#FBDDDD" ,borderBottom:"2px solid white"}}>
                                <td colSpan={3}><img style={{ padding: "10px", width: "150px" }} src={logo1} /></td>
                                <td colSpan={3}><img style={{ padding: "10px", width: "150px" }} src={logo2} /></td>
                                <td colSpan={3}><img style={{ padding: "10px", width: "150px" }} src={logo3} /></td>
                                <td colSpan={3}><img style={{ padding: "10px", width: "150px" }} src={logo4} /></td>
                            </tr>
                            <tr className="tbody">
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}><img style={{ padding: "20px 10px 10px 20px", width: "150px" }} src={item00} /></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}><img style={{ padding: "20px 10px 10px 10px", width: "150px" }} src={item01} /></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}><img style={{ padding: "20px 10px 10px 10px", width: "150px" }} src={item02} /></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}><img style={{ padding: "20px 10px 10px 10px", width: "150px" }} src={item03} /></td>
                            </tr >
                            <tr className="tbody">
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}><img style={{ padding: "10px 10px 10px 20px", width: "150px" }} src={item10} /></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}><img style={{ padding: "10px", width: "150px" }} src={item11} /></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}><img style={{ padding: "10px", width: "150px" }} src={item13} /></td>
                            </tr>
                            <tr className="tbody">
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}><img style={{ padding: "10px", width: "150px" }} src={item21} /></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}></td>
                            </tr>
                            <tr className="tbody">
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}><img style={{ padding: "10px 10px 20px 10px", width: "150px" }} src={item31} /></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}></td>
                                <td colSpan={3} style={{ borderLeft: "2px solid white" }}></td>
                            </tr>
                        </table>
                    </Col>
                </Row>
                <Row>
                    <Col align="middle" style={{ marginTop: "15px" }} >
                        <Button onClick={() => this.setState({ compare: true })} type="primary" shape="round" icon="download" size="large">
                            <Link to="/compare">Compare</Link>
                        </Button>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Product
