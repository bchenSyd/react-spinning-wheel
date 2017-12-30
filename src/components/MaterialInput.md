
<style>
 .inputStyle{
    width: 200px
}
</style>
```js
class TestComponent extends React.Component{
    constructor(){
        super();
        this.state={
            value:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { target:{value}} = e;
        this.setState({
            value
        })
    }
    render(){
        const {value } = this.state;
        return <MaterialInput id="_input"
                value={value}
                onChange={this.handleChange}
                hint="type something"
                className="inputStyle"/>
    }
}

<div>
    <TestComponent />
</div>
```