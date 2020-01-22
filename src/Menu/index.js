import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
export const name = 'Menu';

export const defaultConfig = {
    testProp: 'Default test prop'
};

export const configSchema = {
    testProp: ElementPropTypes.string
};

export const component = props => {
    return (
        <div style={{ border: '1px solid red' }}>
            <h3>Global Component Test:</h3>
            <p>Test Prop: {props.testProp}</p>
        </div>
    );
};

component.propTypes = configSchema;
