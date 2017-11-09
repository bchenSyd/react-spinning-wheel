import  React from 'react';
import '../styles/spinner.less';

export default function FKLoadingTemplate(props) {
    const {classNames} = props;
    return <div className={`spin-wrapper ${classNames ? classNames : ''}`}>
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
}
