import { Select } from 'antd';
import React, { Component } from 'react'

const { Option } = Select;


const data = [
    {
        index: 1,
        text: "SK-II Facial Treatment Essence",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil4"],
    },
    {
        index: 2,
        text: "BIOTHERM Life Plankton Essence",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil2", "fil3"],
    },
    {
        index: 3,
        text: "ESTEE LAUDER Advanced Night Repair Synchronized Recovery Complex II",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil1", "fil4"],
    },
    {
        index: 4,
        text: "It's Skin Power 10 Formula VC Effecto",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil2", "fil4"],
    },
    {
        index: 5,
        text: "ESTEE LAUDER Advanced Night Repair Synchronized Recovery Complex I",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil1", "fil4"],
    },
    {
        index: 6,
        text: "SK-I Facial Treatment Essence",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil4"],
    },
    {
        index: 7,
        text: "SK-III Facial Treatment Essence",
        description: "descrip1",
        description2: "descrip2",
        filter: ["fil4"],
    }

]

class SearchInput extends Component {
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
                style={{ margin:"15px",width: "100%",border:"2px solid #DE648B",borderRadius:"7px"}}
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