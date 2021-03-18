import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { getRadioKnobs } from '../../../../.storybook/atlas-stand/utils';
import { WithDropdown, Icons, Link } from '../../../index';
import * as Components from '../../../index';
import { Story, StoryItem, StoryCode } from '../../../../.storybook/atlas-stand/components';
import { withCustomStoryConfig } from '../../../../.storybook/atlas-stand/hocs';

const propsConfig = {
    trigger: ['click', 'hover'],
    position: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
};

const components = [
    {
        name: 'Button',
        props: { children: 'Узнай ответ на свой вопрос', size: 'lg', iconPrefix: Icons.Search }
    }, {
        name: 'Link',
        props: { children: 'Узнай ответ на свой вопрос', size: 'sm', iconPostfix: Icons.ArrowDown }
    }, {
        name: 'Icon',
        props: { children: Icons.QuestionOutline, size: 'lg', }

    }
];

const getComponentsKnobs = () => {
    const selected = select('Components', components.map(({ name }) => name), components[0].name);
    return {
        component: Components[selected],
        props: components.find(item => item.name === selected).props
    };
};

export default withCustomStoryConfig({
    title: 'Components|Dropdown',
    decorators: [withKnobs]
});

const OverlayComponent = (props) => (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: '250px' }}>
        <Link url='https://raketa.world' pattern='common' size='md'>Налево пойдешь – коня потеряешь</Link>
        <Link url='https://raketa.world' pattern='common' size='md'>Направо пойдешь – жизнь потеряешь</Link>
        <Link url='https://raketa.world' pattern='common' size='md'>Прямо пойдешь – счастье найдешь</Link>
    </div>
);

export const Playground = (props) => {

    const { component: activator, props: activatorProps } = getComponentsKnobs();

    const DecoratedComponent = WithDropdown(activator)(OverlayComponent)({ trigger: getRadioKnobs('trigger', propsConfig), position: getRadioKnobs('position', propsConfig) });

    return (
        <Story title="Dropdown меню" {...props}>
            <StoryItem>
                <DecoratedComponent {...activatorProps} />
            </StoryItem>
            <StoryCode>
                {`const DecoratedComponent = WithDropdown(${select('Components', components.map(({ name }) => name), components[0].name)})(SomeOverlayComponent)({ trigger: '${getRadioKnobs('trigger', propsConfig)}', position: '${getRadioKnobs('position', propsConfig)}' });\n\n`}
                {` <DecoratedComponent {...someOwnProps} />`}
            </StoryCode>
        </Story>
    );
};