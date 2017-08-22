import React from 'react';
import ReactDOM from 'react-dom';
import { Layout} from 'antd';
const { Header} = Layout;
import Sidebar from './components/Sidebar.jsx'

// 兼容IE
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

// Animate.CSS样式 & font-awesome样式
import 'animate.css/animate.min.css';
import './main.less';

// 配置整体组件
export default class Init extends React.Component {
    constructor(props) {
        super(props);        
    } 

    render() {
        return (
            <div>
                <Sidebar />
                <Header></Header>
                <div id="rightWrap">
                    {this.props.children}                
                </div>
            </div>
        )
    }
}
