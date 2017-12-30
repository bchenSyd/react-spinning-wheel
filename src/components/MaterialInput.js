import React, { Component } from 'react';
import '../styles/materialInput.less';


class MaterialInput extends Component {
    constructor() {
        super();
        this.state = {
            isFocused: false,
        };
    }

    handleInputFocus = () => {
        this.setState({ isFocused: true });
    }

    handleInputBlur = () => {
        this.setState({ isFocused: false });
    }

    handleInputChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }
    showHint = () => {
        const { value } = this.props;
        const { isFocused } = this.state;
        return !(value || isFocused);
    }
    render() {
        const { id, className, hint, value, styles } = this.props;
        const { isFocused } = this.state;
        const underlineClassName = isFocused ? "underline-focused focus" :"underline-focused ";
        return (
            <div id={id} className={`material-input ${className}`} style={styles}>
                {this.showHint() && <div className="hint" >
                    {hint}
                </div>}
                <input id={`${id}_input`}
                    value={value}
                    ref={ref => { this.input = ref; }}
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}
                    onChange={this.handleInputChange}
                />
                <div name="underline">
                    {/* you need this line when underline-focused is transformed off scaleX(0) */}
                    <hr className="underline" />
                    <hr className={underlineClassName} />
                </div>
            </div>
        );
    }
}

export default MaterialInput;