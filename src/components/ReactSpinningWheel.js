import  React from 'react';
import PropTypes from 'prop-types';
import '../styles/spinner.less';
/**
 * * spinning wheel has a default hight of 256px. 
 * * see examples on how to disable the default height
 */
const ReactSpinningWheel = (props) =>{
    const {className} = props;
    return <div className={`spin-wrapper ${className ? className : ''}`}>
        <div className="uil-spin-css">
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
        </div>
    </div>;
};

ReactSpinningWheel.propTypes={
    /** pass in a class to override spinner default class */
    className: PropTypes.string
}
ReactSpinningWheel.defaultProps={
    className: '',
}
export default ReactSpinningWheel;
