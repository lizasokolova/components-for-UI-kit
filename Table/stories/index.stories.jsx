import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { getRadioKnobs } from '../../../../.storybook/atlas-stand/utils';
import { Table, Button, Icons } from '../../../index';
import { Story, StoryItem, StoryCode, AllInOneStory } from '../../../../.storybook/atlas-stand/components';
import { withCustomStoryConfig } from '../../../../.storybook/atlas-stand/hocs';

const HeaderFn = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', textTransform: 'uppercase', color: '#6b6b6b' }}>
        <div style={{ minWidth: '250px' }}><Button size='md' mix='atlas-table__header-button' pattern='like-link' iconPostfix={Icons.ArrowDown}>Полное имя</Button></div>
        <div style={{ minWidth: '150px' }}><Button size='md' mix='atlas-table__header-button' pattern='like-link' iconPostfix={Icons.ArrowDown}>Услуга</Button></div>
        <div style={{ minWidth: '75px', fill: '$atlas-brand' }}><Button size='md' mix='atlas-table__header-button' pattern='like-link' iconPostfix={Icons.ArrowDown}>Сумма</Button></div>
    </div>
);

const propsConfig = {
    pattern: ['common', 'mild', 'light'],
    headerFn: [null, HeaderFn]
};

const getIsHasHeaderKnobs = () => boolean('Header', false);

const content = (
    [
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ minWidth: '250px' }}>Игнатьева Маргарита Вадимовна</div>
            <div style={{ minWidth: '150px' }}>Визы</div>
            <div style={{ minWidth: '75px' }}>137 275,04</div>
        </div>,
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ minWidth: '250px' }}>Громов Герасим Александрович</div>
            <div style={{ minWidth: '150px' }}>Отель</div>
            <div style={{ minWidth: '75px' }}>77 811,26</div>
        </div>,
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ minWidth: '250px' }}>Романов Егор Парфенович</div>
            <div style={{ minWidth: '150px' }}>Трансфер</div>
            <div style={{ minWidth: '75px' }}>55 913,05</div>
        </div>
    ]
);

export default withCustomStoryConfig({
    title: 'Components|Table',
    decorators: [withKnobs]
});
export const Playground = (props) => {
    return (
        <Story title='Таблица' {...props}>
            <StoryItem>
                <Table
                    pattern={getRadioKnobs('pattern', propsConfig)}
                    headerFn={getIsHasHeaderKnobs() ? HeaderFn : null}
                >
                    {content}
                </Table>
                <StoryCode>
                    {`<Table ` +
                        `pattern='${getRadioKnobs('pattern', propsConfig)}'` +
                        `${getIsHasHeaderKnobs() ? ' headerFn={Some Callback}' : ''}` +
                        `>` +
                        ` {Some JSX} ` +
                        `</Table>`
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
            component={Table}
            componentProps={{
                children: content
            }}
        />
    </Story >
);