import React from 'react';
import { CONFIG } from './config';
import { generateBemCls } from '../../utils';

export const Table = (props) => {

    const { pattern = 'common', size = 'md', id, dataTestId, reactRef, mix, children, headerFn } = props;

    const mods = {
        [pattern]: true,
        [size]: true,
        'with-header': !!headerFn
    };

    const blockCls = generateBemCls({ block: CONFIG.bemBlockName, mods, mix });

    return (
        <div
            className={blockCls}
            id={id}
            ref={reactRef}
            data-test-id={dataTestId}
        >
            {headerFn && (<div className={'atlas-table__header'}>{headerFn()}</div>)}
            {
                children.map(row => (
                    <div className={'atlas-table__row'}>   {row}   </div>
                ))
            }
        </div>
    );
};