import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
export const name = 'DemoComponent';

export const defaultConfig = {
    testProp: 'Default test prop',
    borderColor: '#f00'
};

export const configSchema = {
    testProp: ElementPropTypes.string,
    backgroundColor: ElementPropTypes.color,
    borderColor: ElementPropTypes.color
};

const component = ({ testProp, ...props }) => {
    const globalStyles = props.globalStyles || {};

    const globalButtonStyles =
        globalStyles.volComponentButton.primaryButtonStyles;

    const buttonStyles = {
        ...globalButtonStyles,
        backgroundColor:
            props.backgroundColor ||
            globalButtonStyles.backgroundColor ||
            '#f00',
        padding: '25px 10px',
        border: 'none'
    };

    return (
        <div {...props} style={{ border: `1px solid ${props.borderColor}` }}>
            <h2>{testProp}</h2>
            <button style={buttonStyles}>{testProp}</button>
        </div>
    );
};

component.propTypes = configSchema;
component.defaultProps = defaultConfig;

export { component };
