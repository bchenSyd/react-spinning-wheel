
```js
const inputStyle={
    width: '400px'
}
class TestComponent extends React.Component{
    render(){
        return <MaterialInput id="_input" hint="type something" styles={inputStyle}/>
    }
}

<div>
    <TestComponent />
</div>
```