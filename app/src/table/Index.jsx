import React from 'react';
import Mock from 'mockjs';
import { Table } from 'antd';
const dataSource = [];
for (let i = 0; i < 30; i++) {
    dataSource.push(Mock.mock({
        key:i,
        code: Mock.mock('@increment'),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
        sex: Mock.Random.integer(0, 1)
    }));
}

const columns = [{
  title: 'ID',
  dataIndex: 'code',
  key: 'code',
},{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
    title:'性别',
    dataIndex:'sex',
    key:'sex',
    render: (text, record, index) => { 
     return text==1?"男":"女"
    }
}, {
  title: '生日',
  dataIndex: 'birth',
  key: 'birth',
},{
  title: '住址',
  dataIndex: 'addr',
  key: 'addr',
}];


export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            col:'#666',
            size: 'small',
        }        
    }
    state = {
        selectedRowKeys: [],  
    };
    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    }
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
          selections: [{
            key: 'all-data',
            text: '全选',
            onSelect: () => {
              this.setState({
                selectedRowKeys: [...Array(30).keys()],  // 0...45
              });
            },
          }],
          onSelection: this.onSelection,
        };
        return (
          <Table dataSource={dataSource} columns={columns} rowSelection={rowSelection} bordered/>
        );
    }
}
