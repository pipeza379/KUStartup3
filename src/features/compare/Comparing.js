import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'antd'
import { Header, Table, Rating } from 'semantic-ui-react'
import './compare.css'

const data = [
    {
        rate: "10",
        brand: "abc",
        name: "test",
        type: ["a", "b"],
        properties: "aaaa",
        skin: "bbbb",
        using: "description",
        quntity: "20g",
        price: "100"
    },
    {
        rate: "8",
        brand: "acd",
        name: "test2",
        type: ["b", "c"],
        properties: "aaaa",
        skin: "bbbb",
        using: "description",
        quntity: "30g",
        price: "200"
    },
    {
        rate: "9",
        brand: "bbd",
        name: "test3",
        type: ["h", "a"],
        properties: "aaaa",
        skin: "bbbb",
        using: "description",
        quntity: "100g",
        price: "50"
    }
]

const FILTER = ["", "rate", "brand", "name", "type", "properties", "skin", "using", "quntity", "price"];
const selIndex = []
for (let i = 0; i < data.length; i++)
    selIndex.push(false)

class Comparing extends Component {
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

    compare = () => {
        let sel = [], select = this.state.select
        for (let i = 0; i < select.length; i++) {
            if (select[i])
                sel.push(i)
        }
        let representdata = []
        FILTER.forEach(e => {
            let column = []
            column.push(e)
            representdata.push(column)
        })
        for (let j = 0; j < sel.length; j++) {
            representdata[0].push("img")
            representdata[1].push(this.state.data[sel[j]].rate)
            representdata[2].push(this.state.data[sel[j]].brand)
            representdata[3].push(this.state.data[sel[j]].name)
            representdata[4].push(this.state.data[sel[j]].type)
            representdata[5].push(this.state.data[sel[j]].properties)
            representdata[6].push(this.state.data[sel[j]].skin)
            representdata[7].push(this.state.data[sel[j]].using)
            representdata[8].push(this.state.data[sel[j]].quntity)
            representdata[9].push(this.state.data[sel[j]].price)
        }
        console.log(representdata)
        let table = []
        // table = [..table, (<Table celled padded>
        //     <Table.Header>
        //         <Table.Row>)
                    // ]
        for(let i=0;i<sel.length; i++){
                        table = [...table,

                        ]
                    }
                    representdata.forEach(d=>{
            for(let i=0;i<sel.length; i++){
                        let data = d[i]
                }
            })
        }
    
    render() {
        return (
            <React.Fragment>
                        <h1 style={{ textAlign: "center" }}>Test Comparing</h1>
                        <br />
                        <Row>
                            <Col style={{ background: '#ECECEC', padding: '30px', width: "80%" }} align="middle">
                                {/* <div className="box" style={{ border: "1px solid black", width: "80%", height: "1000px", marginLeft: "15%", padding: "15px" }}> */}
                                <Row gutter={16}>
                                    {this.createCard()}
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col align="middle" >
                                <Button onClick={() => this.setState({ compare: true })} type="primary" shape="round" icon="download" size="large">
                                    Compare
                        </Button>
                            </Col>
                        </Row>
                        <Row>
                            {this.state.compare && this.compare()}
                            <Table celled padded>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell></Table.HeaderCell>
                                        <Table.HeaderCell>Effect</Table.HeaderCell>
                                        <Table.HeaderCell>Efficacy</Table.HeaderCell>
                                        <Table.HeaderCell>Consensus</Table.HeaderCell>
                                        <Table.HeaderCell>Comments</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h2' textAlign='center'>
                                                A
                                    </Header>
                                        </Table.Cell>
                                        <Table.Cell singleLine>Power Output</Table.Cell>
                                        <Table.Cell>
                                            <Rating icon='star' defaultRating={3} maxRating={3} />
                                        </Table.Cell>
                                        <Table.Cell textAlign='right'>
                                            80% <br />
                                            <a href='#'>18 studies</a>
                                        </Table.Cell>
                                        <Table.Cell>
                                            Creatine supplementation is the reference compound for increasing muscular creatine
                                            levels; there is variability in this increase, however, with some nonresponders.
                                </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as='h2' textAlign='center'>
                                                A
                                    </Header>
                                        </Table.Cell>
                                        <Table.Cell singleLine>Weight</Table.Cell>
                                        <Table.Cell>
                                            <Rating icon='star' defaultRating={3} maxRating={3} />
                                        </Table.Cell>
                                        <Table.Cell textAlign='right'>
                                            100% <br />
                                            <a href='#'>65 studies</a>
                                        </Table.Cell>
                                        <Table.Cell>
                                            Creatine is the reference compound for power improvement, with numbers from one
                                            meta-analysis to assess potency
                                </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Row>
                    </React.Fragment>
                    )
                }
            }
            
            export default Comparing;
