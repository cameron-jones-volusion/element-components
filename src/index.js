import * as ButtonComponent from './ButtonComponent';
import * as LegacyButton from './Button';
import * as Image from './Image';
import * as Input from './Input';
import * as LinkButton from './LinkButton';
import * as ElementBlock from './ElementBlock/src';
import * as Text from './Text';

export {
    // Button,
    Image,
    Input,
    LinkButton,
    ButtonComponent,
    ElementBlock,
    Text
};

export const getLegacyComponents = () => ({
    Button: LegacyButton
});
