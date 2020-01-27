import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
export const name = 'DemoComponent';

export const defaultConfig = {
    testProp: 'Default test prop'
};

export const configSchema = {
    testProp: ElementPropTypes.string
    // backgroundColor: ElementPropTypes.color
};

const component = ({ testProp, ...props }) => {
    const globalStyles = props.globalStyles || {};

    const buttonStyles = {
        backgroundColor: '#f00',
        ...globalStyles.volComponentButton.primaryButtonStyles
    };

    return (
        <div {...props}>
            <h2>{testProp}</h2>
            <button style={buttonStyles}>{testProp}</button>
        </div>
    );
};

component.propTypes = configSchema;
component.defaultProps = defaultConfig;

export { component };
