## style-guidist
 * to add a module (could be a `less` file), you can either add it into `styleguide.config.js`
```javascript
require: [
        path.join(__dirname, 'src/style-guidist/styles.less'),
    ],
```
or put it dynamically in your `component.md` file
```javascript
const styles=require('../style-guidist/styles.less');
const data = require('../style-guidist/setup').default;
<div>
    <div>name:{data.name}</div>
    <div className="spinner-example-1">
    ...
   ```
both works
 * more to add

## ./sample
* you can share everything from parent folder except `webpack` and `wds`