import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getStyles } from './getStyles';
import { defaultConfig } from './configs';
import { ElementBlockProps, ObjectLiteral } from './types';

const Block = (props: ElementBlockProps) => {
    const { globalSettings, customAttrs, children, ...rest } = props;
    const styles = StyleSheet.create(getStyles(props, globalSettings));
    /* const customProps: ObjectLiteral = {}; */
    /* customAttrs.forEach((attr: { name: string; value: string }) => { */
    /*     const hyphenateString = (string = '') => { */
    /*         // const specialChars = /[^a-zA-Z0-9\s-_]+/g; */
    /*         const nonAlphaNumericChars = /[^a-zA-Z0-9]+/g; */
    /*         const attr = string */
    /*             .trim() */
    /*             // .replace(specialChars, '') */
    /*             .replace(nonAlphaNumericChars, '-'); */
    /*         return attr; */
    /*     }; */
    /*     const fullAttrName = `data-element-${hyphenateString(attr.name)}`; */
    /*     customProps[fullAttrName] = attr.value; */
    /* }); */
    const attrs = customAttrs.map((attr: { name: string; value: string }) => {
        const hyphenateString = (string = '') => {
            const nonAlphaNumericChars = /[^a-zA-Z0-9]+/g;
            const attr = string
                .trim()
                // .replace(specialChars, '')
                .replace(nonAlphaNumericChars, '-');
            return attr;
        };
        return {
            [`data-element-${hyphenateString(attr.name)}`]: value
        }
    })
    .reduce((acc, attr) => {
        return { ...acc, ...attr }
    }, {})
    return (
        <div {...attrs} className={css(styles.wrapper)} >
            {children}
        </div>
    );
};

Block.defaultProps = defaultConfig;

export default Block;
