import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
export const name = 'DemoComponent';

export const factory = () => <h1>COMPONENT FROM FACTORY</h1>;

const createConfig = (proptype, proptypeArgs) => {
    if (proptypeArgs) {
        return {
            [`${proptype}Prop`]: {
                label: `Label: ElementPropTypes.${proptype}`,
                type: ElementPropTypes[proptype](proptypeArgs),
            },
        };
    }
    return {
        [`${proptype}Prop`]: {
            label: `Label: ElementPropTypes.${proptype}`,
            type: ElementPropTypes[proptype],
        },
    };
};


const propTypeConfigs = [
    ["bool", true],
    ["string", "String Value"],
    ["color", "#fff"],
    ["number", 5],
    [
        "image",
        {
            altText: "alt text for the image",
            imagePath: "path/to/image",
            uriBase: "https://www.site.com/",

            height: 600,
            width: 800,
        },
    ],
    [
        "slider",
        {
            labelPrefix: "~",
            labelStepSize: 10,
            labelSuffix: " oz",

            max: 100,
            min: 50,

            selectedValue: 75,
            stepSize: 5,
            vertical: false,
        },
    ],
    ["media"],
    ["product"],
    ["category"],
    ["sectionHeader", "Section Header Value"],
    ["editorFull", "<p>Editable Text</p>"],
    ["editorMinimal", "<p>Editable Text</p>"],
    ["readOnly", "Read Only Value"],
    ["oneOf", "Option A", ["Option A", "Option B"]],
    [
        "shape",
        { color: "#fff", fontFamily: "Helvetica Neue", fontSize: 16 },
        {
            color: ElementPropTypes.color,
            fontFamily: ElementPropTypes.string,
            fontSize: ElementPropTypes.number,
        },
    ],
    // [
    //     "embeddable",
    //     {
    //         embedType: "iframe",
    //         height: 800,
    //         url: "https://www.site.com",
    //     },
    //     {
    //         embedType: ElementPropTypes.string,
    //         height: ElementPropTypes.number,
    //         url: ElementPropTypes.string,
    //     },
    // ],
    [
        "arrayOf",
        [{ exampleProp: "foo" }, { exampleProp: "bar" }],
        ElementPropTypes.shape({ exampleProp: ElementPropTypes.string }),
    ],
];

const testConfigs = propTypeConfigs.map((config) => {
    const [proptype, value, proptypeArgs] = config;
    const schema = createConfig(proptype, proptypeArgs);
    const defaults = { [`${proptype}Prop`]: value }
    return { schema, defaults }
});

const extractDefaults = (result, config) => ({ ...result, ...config.defaults });
const extractSchemas = (result, config) => ({ ...result, ...config.schema });

export const defaultConfig = testConfigs.reduce(extractDefaults, {})

export const configSchema = testConfigs.reduce(extractSchemas, {})

const component = (props) => {
    const codeSnippet = {
        padding: '1rem',
        backgroundColor: '#eee',
        borderRadius: '.25rem',
        boxShadow: 'inset 0px 1px 1px 1px rgba(0, 0, 0, 0.1)'
    }

    const propDisplay = {
        padding: '1rem',
        borderBottom: "1px solid #777"
    }

    return (
        <div>
            {Object.keys(props).map(propName => {
                const value = props[propName];
                return (
                <div key={propName} >
                    <p style={propDisplay}><b>{propName}:</b></p>
                    <pre style={codeSnippet}>{JSON.stringify(value, null, 2)}</pre>
                </div>
                )
            })} 
        </div>
    );
};

// component.propTypes = configSchema;
component.defaultProps = defaultConfig;

export { component };
