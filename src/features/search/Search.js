import { Select } from 'antd';
import React, { Component } from 'react'

const { Option } = Select;


const data = [
    {
        index: 1,
        text: "data1",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil4"],
    },
    {
        index: 2,
        text: "data2",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil2", "fil3"],
    },
    {
        index: 3,
        text: "data3",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil1", "fil4"],
    },
    {
        index: 4,
        text: "data4",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil2", "fil4"],
    }
]

class SearchInput extends React.Component {
    state = {
        data: data,
        value: undefined,
    };

    handleSearch = value => {
        fetch(value, data => this.setState({ data }));
    };

    handleChange = value => {
        this.setState({ value });
    };

    render() {
        const options = this.state.data.map(d => <Option key={d.index}>{d.text}</Option>);
        return (
            <Select
                showSearch
                value={this.state.value}
                placeholder={"Search"}
                style={{ margin:"15px",marginLeft:"10%",width: "80%" }}
                defaultActiveFirstOption={false}
                // showArrow={false}
                filterOption={false}
                onSearch={this.handleSearch}
                onChange={this.handleChange}
                notFoundContent={null}
            >
                {options}
            </Select>
        );
    }
}

export default SearchInput