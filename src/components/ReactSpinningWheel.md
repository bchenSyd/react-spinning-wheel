```jsx static
// ../style-guidist/styles.less
.overrlap-with-content{
    height:0;
    position: relative;
    top: 60px;
}
//../style-guidist/setup.js
const mock={
    name:'bchen'
}
export default mock;
// component.js
import {ReactSpinningWheel} from 'react-spinning-wheel';

const component= ()=>(
    <ReactSpinningWheel  classNames="overrlap-with-content"/>
)
```
live example:
```javascript
const styles=require('../style-guidist/styles.less');
const data = require('../style-guidist/setup').default;
<div>
    <div>dynamically add module : {data.name}</div>
    <div className="spinner-example-1">
        <ReactSpinningWheel />
        <h1>default creat a gap. to remove the gap, you need to set {'{'} position: relative; height:0; top: 100px {'}'}
          like the example shown below</h1>
    </div>
    <div className="spinner-example-2">
        <ReactSpinningWheel className="loading-overlap"/>
        <h1>in your styles/index.less file, you cannot use @import 'spinner' because *.less is not registered as a default extention<br/>
            only js and json are default extensions
        </h1>
        <h1>you don't need `babel-cli` if you don't run `babel-node`
        </h1>
    </div>
</div>
```