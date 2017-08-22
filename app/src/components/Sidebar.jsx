import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;
// 引入Antd组件
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
           
        }
    }    
    handleClick = (e) => {
        this.setState({
           current: e.key,
        });
    }
    render() {
        return (
            <div id="leftMenu"> 
                <Header>
                    <img src={require('../images/logo.png')} width="50" id="logo"/><span  style={{ color: '#fff'}}>React</span>{/*logo图标*/}
                </Header>
                <Menu onClick={this.handleClick}
                    style={{ width: 185 }}
                    selectedKeys={[this.state.current]}
                    theme="dark"
                    mode="inline">
                    <Menu.Item key="1">                    
                        <IndexLink to="/"><span><Icon type="home" /><span>表格</span></span></IndexLink>
                    </Menu.Item>    
                    <SubMenu key="sub2" title={<span><Icon type="appstore-o" /><span>导航一</span></span>}>
                        <Menu.Item key="2"><Link to="/profile">tab页</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/Campaign">请求数据</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                        <Link to="/last"><span><Icon type="mail" /><span>兼容问题</span></span></Link>
                    </Menu.Item>
                </Menu>
                <div id="copyright">Copyright © RUAN</div>                    
            </div>                
        )
    }
}