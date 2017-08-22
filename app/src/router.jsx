import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect ,hashHistory} from 'react-router';
// import createHistory from 'history/lib/createHashHistory';
// const history = createHistory();

// 引入单个页面（包括嵌套的子页面）
import Init from './main.jsx';
import Table from './table/Index.jsx';
import Profile from './profile/profile.jsx';
import Last from './last/last.jsx';
import NotFoundPage from './nofind/nofind.jsx';
import Login from './login/login.jsx';
import Campaign from './campaign/campaign.jsx';
// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={hashHistory} >        
        <Route path="/login" component={Login} />
        <Route path="/" component={Init} >
            <IndexRoute component={Table}/>
            <Route path="profile" component={Profile} />
            <Route path="last" component={Last} />
            <Route path="campaign" component={Campaign} />
            {/* 404 */}
            <Route path='/404' component={NotFoundPage} />                    
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='/404' />
        </Route>
    </Router>
    , document.querySelector('#init')
)