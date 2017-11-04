import  React from 'react';

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
