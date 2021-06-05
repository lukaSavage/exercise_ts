import React, { FC } from 'react';
import { Button } from 'antd';
import { Link, Route, Switch, Redirect } from 'react-router-dom'

import Index from './pages/index'
import Two from './pages/Two'

import './App.less'

const App: FC = () => (
    <div className="App">
        <Button type="primary" className="bbb"><Link to="/index">去index页面</Link></Button>
        <Button type="primary"><Link to="/other">去第二个页面</Link></Button>
        <hr />
        <Switch>
            <Route path="/index" component={Index}></Route>
            <Route path="/other" component={Two}></Route>
            <Redirect to="/index" />
        </Switch>
    </div>
);

export default App;