import React from 'react';
import {Table,Icon,Tooltip} from 'antd';
import { Link } from 'react-router';

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

import './campaign.less';

// 引入组件
import Title from '../components/Title.jsx';
import Header from './components/header.jsx';

export default class Campaign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            data:[],
            loading: true
        }        
    }    

    // 行单击事件
    rowClick = (e) => {
        console.log(e.key);
    }

    refresh = (d) => {
        // 刷新表格
        this.setState({data:d.list});
    }

    // 获取表格数据
    fetchTableData = () => {
        fetch('../data/morkData.json')
            .then((res) => { 
                console.log(this.state.loading)
                return res.json(); 
            })
            .then((d) => { 
                this.setState({loading:false});
                this.setState({data:d.data.list}); 
            })
            .catch((e) => {
                this.setState({loading:false}); 

            });
             this.setState({loading:true}); 
    }    
    // 组件渲染后获取外界数据(GET)
    componentDidMount() {
        this.fetchTableData();
    }         
    render() {  
        /*定义表格列*/
        const columns = [{
            title: 'ID',
            dataIndex: 'org_id'  
        }, {
            title: '姓名',
            dataIndex: 'customerName'
        },{
            title: '性别',
            dataIndex: 'gender',
            render:(t)=>{
                return t==1?'男':'女'
            }
        },{
            title: '年龄',
            dataIndex: 'age',
        },{
            title: '电话',
            dataIndex: 'phoneNo',
        }];              

        return (
            <div id="wrap">                
                <div id="table">
                    <Table 
                        rowSelection={{}} 
                        dataSource={this.state.data} 
                        columns={columns} 
                        pagination={{size:'large'}} 
                        loading={ this.state.loading}
                    />                   
                </div>
            </div>
        )
  }
}
