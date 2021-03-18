import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { getRadioKnobs } from '../../../../.storybook/atlas-stand/utils';
import { Panel, Button, Icons, Icon, Input } from '../../../index';
import { Story, StoryItem, StoryCode, AllInOneStory } from '../../../../.storybook/atlas-stand/components';
import { withCustomStoryConfig } from '../../../../.storybook/atlas-stand/hocs';

const HeaderFn = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        color: '#333',
        alignItems: 'center',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '15px',
        paddingBottom: '20px',
        fontSize: '16px',
        lineHeight: '24px'
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center'
        }}
        >
            <Icon size='md'>{Icons.Plane}</Icon>
            <span style={{
                paddingLeft: '10px'
            }}>
                Авиабилет
            </span>
        </div>
        <Button
            size='md'
            pattern='major'
            style={{ margin: '20px' }}
        >
            Редактировать
        </Button>
    </div>
);

const IncutFn = () => (
    <div style={{
        display: 'flex',
        width: '550px',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontSize: '13px',
        lineHeight: '20px',
        fontWeight: 'bold',
        paddingLeft: '20px',
        paddingTop: '20px',
        paddingBottom: '20px'
    }}
    >
        Сбор отображать отдельной строкой
    </div>
);

const FooterFn = () => (
    <div style={{
        width: '550px',
        paddingTop: '15px',
        // paddingBottom: '20px',
        paddingLeft: '20px'
    }}
    >
            <Input
                size='md'
                type='text'
                placeholder='Введите текст'
                emptyCaption='Не указано'
            >
            </Input>
    </div>
);


const propsConfig = {
    size: ['md', 'lg'],
    headerFn: [null, HeaderFn],
    incutFn: [null, IncutFn],
    footerFn: [null, FooterFn],
    children: [null, content]
};

const getIsHasHeaderKnobs = () => boolean('Header', true);
const getIsHasIncutKnobs = () => boolean('Incut', true);
const getIsHasChildrenKnobs = () => boolean('Children', true);
const getIsHasFooterKnobs = () => boolean('Footer', true);

const content = (
    [
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            boxSizing: 'border-box',
            overflow: 'hidden',
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingRight: '20px',
            paddingLeft: '20px',
            fontSize: '12px'
        }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#e9eaeb',
                width: '100%',
                height: '45px',
                color: '#006699',
                fill: '#006699',
                marginBottom: '10px'
            }}
            >
                <Icon
                    size='md'
                >
                    {Icons.Gear}
                </Icon>
                Сбор за сегмент - 3% стоимости от тарифа
            </div>
            <Button
                size='sm'
                pattern='common'
                isFullWidth
            >
                Добавить
                    </Button>
        </div>
    ]
);

export default withCustomStoryConfig({
    title: 'Components|Panel',
    decorators: [withKnobs]
});
export const Playground = (props) => {
    return (
        <Story title='Панель' {...props}>
            <StoryItem>
                <div style={{ width: '550px', fontSize: '12px' }}>
                    <Panel
                        size={getRadioKnobs('size', propsConfig)}
                        headerFn={getIsHasHeaderKnobs() ? HeaderFn : null}
                        incutFn={getIsHasIncutKnobs() ? IncutFn : null}
                        footerFn={getIsHasFooterKnobs() ? FooterFn : null}
                    >
                        {getIsHasChildrenKnobs() && content}
                    </Panel>
                </div>
                <StoryCode>
                    {`<Panel ` +
                        `size='${getRadioKnobs('size', propsConfig)}'` +
                        `${getIsHasHeaderKnobs() ? ' headerFn={Some Callback}' : ''}` +
                        `${getIsHasIncutKnobs() ? ' incutFn={Some Callback}' : ''}` +
                        `${getIsHasChildrenKnobs() ? ' children={Some Callback}' : ''}` +
                        `${getIsHasFooterKnobs() ? ' footerFn={Some Callback}' : ''}` +
                        `>` +
                        ` {Some JSX} ` +
                        `</Panel>`
                    }
                </StoryCode>
            </StoryItem>
        </Story >
    );
};


export const AllInOne = (props) => (
    <Story {...props}>
        <AllInOneStory
            config={propsConfig}
            component={Panel}
            componentProps={{
                children: content
            }}
        />
    </Story >
);