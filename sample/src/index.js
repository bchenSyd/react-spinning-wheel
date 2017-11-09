import React, { Component } from 'react';
import { render } from 'react-dom';
import {ReactSpinner} from 'react-components';

import './index.less';

const App = props => <div>
    <div className="example1">
        <ReactSpinner />
        <h1>default creat a gap. to remove the gap, you need to set {'{'} position: relative; height:0; top: 100px {'}'}
          like the example shown below</h1>
    </div>
    <div className="example2">
        <ReactSpinner classNames="loading-overlap"/>
        <h1>in your styles/index.less file, you cannot use @import 'spinner' because *.less is not registered as a default extention<br/>
            only js and json are default extensions
        </h1>
        <h1>you don't need `babel-cli` if you don't run `babel-node`
        </h1>
        <h1>in your styles/index.less file, you cannot use @import 'spinner' because *.less is not registered as a default extention<br/>
            only js and json are default extensions
        </h1>
        <h1>you don't need `babel-cli` if you don't run `babel-node`
        </h1>
        <h1>in your styles/index.less file, you cannot use @import 'spinner' because *.less is not registered as a default extention<br/>
            only js and json are default extensions
        </h1>
        <h1>you don't need `babel-cli` if you don't run `babel-node`
        </h1>
    </div>

</div>


render(<App />, document.querySelector('#root'))