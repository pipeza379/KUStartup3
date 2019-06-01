import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'antd'
import './product.css'

const data = [
    {
        id:"1",
        name:"abc"        
    },
    {
        id:"2",
        name:"abb"        
    },
    {
        id:"3",
        name:"acb"        
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
                <h1 style={{ textAlign: "center" }}>เลือกผลิตภัณฑ์</h1>
                <br />
                {/* <Row gutter={16}>
                    <Col span={6} align="middle" ><div style={{ border: "1px solid black", height: "100px", width: "100px" }} /></Col>
                    <Col span={6} align="middle"><div style={{ border: "1px solid black", height: "100px", width: "100px" }} /></Col>
                    <Col span={6} align="middle"><div style={{ border: "1px solid black", height: "100px", width: "100px" }} /></Col>
                    <Col span={6} align="middle"><div style={{ border: "1px solid black", height: "100px", width: "100px" }} /></Col>
                </Row> */}
                {/* <Row>
                    <Col style={{ background: '#ECECEC', padding: '30px', width: "80%" }} align="middle">
                        <Row gutter={16}>
                            {this.createCard()}
                        </Row>
                    </Col>
                </Row> */}
                <Row>
                    <Col align="middle">
                        <table>
                            <tr className="head">
                                <td colSpan={3}><div style={{ border: "1px solid black", height: "100px", width: "100px" }} /></td>
                                <td colSpan={3}><div style={{ border: "1px solid black", height: "100px", width: "100px" }} /></td>
                                <td colSpan={3}><div style={{ border: "1px solid black", height: "100px", width: "100px" }} /></td>
                                <td colSpan={3}><div style={{ border: "1px solid black", height: "100px", width: "100px" }} /></td>
                            </tr>
                            <tr>
                                <td colSpan={3}>1</td>
                                <td colSpan={3}>Mark</td>
                                <td colSpan={3}>Otto</td>
                                <td colSpan={3}>@mdo</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>2</td>
                                <td colSpan={3}>Jacob</td>
                                <td colSpan={3}>tdornton</td>
                                <td colSpan={3}>@fat</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>2</td>
                                <td colSpan={3}>Jacob</td>
                                <td colSpan={3}>tdornton</td>
                                <td colSpan={3}>@fat</td>
                            </tr>
                        </table>
                    </Col>
                </Row>
                <Row>
                    <Col align="middle" style={{marginTop:"15px"}} >
                        <Button onClick={() => this.setState({ compare: true })} type="primary" shape="round" icon="download" size="large">
                            Compare
                        </Button>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Product
