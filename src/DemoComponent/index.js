import React from 'react';
import { ElementPropTypes } from '@volusion/element-proptypes';
export const name = 'DemoComponent';

export const factory = () => <h1>COMPONENT FROM FACTORY</h1>;

const createConfig = (proptype: any, proptypeArgs: any) => {
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
    // [
    //     "shape",
    //     { color: "#fff", fontFamily: "Helvetica Neue", fontSize: 16 },
    //     {
    //         color: ElementPropTypes.color,
    //         fontFamily: ElementPropTypes.string,
    //         fontSize: ElementPropTypes.number,
    //     },
    // ],
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

const testConfigs = propTypeConfigs.map((config): any => {
    const [proptype, value, proptypeArgs] = config;
    const schema = createConfig(proptype, proptypeArgs);
    const defaults = { [`${proptype}Prop`]: value }
    return { schema, defaults }
});

const extractDefaults = (result, config) => ({ ...result, ...config.defaults });
const extractSchemas = (result, config) => ({ ...result, ...config.schema });

export const defaultConfig = {
    testProp: 'Default test prop',
    borderColor: '#f00',
    ...testConfigs.reduce(extractDefaults, {})
};

export const configSchema = {
    testProp: ElementPropTypes.string,
    backgroundColor: ElementPropTypes.color,
    borderColor: ElementPropTypes.color,
    ...testConfigs.reduce(extractSchemas, {})
};

const component = ({ testProp, ...props }) => {
    // const globalStyles = props.globalStyles || {};

    // const globalButtonStyles =
    //     globalStyles.volComponentButton.primaryButtonStyles;

    // const buttonStyles = {
    //     ...globalButtonStyles,
    //     backgroundColor:
    //         props.backgroundColor ||
    //         globalButtonStyles.backgroundColor ||
    //         '#f00',
    //     padding: '25px 10px',
    //     border: 'none'
    // };

    return (
        <div {...props} style={{ border: `1px solid ${props.borderColor}` }}>
            <h2>{testProp}</h2>
            {/* <button style={buttonStyles}>{testProp}</button> */}
        </div>
    );
};

component.propTypes = configSchema;
component.defaultProps = defaultConfig;

export { component };
