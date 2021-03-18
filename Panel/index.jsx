import React from 'react';
import { CONFIG } from './config';
import { generateBemCls } from '../../utils';

export const Panel = (props) => {

    const { size = 'md', id, dataTestId, reactRef, mix, children, headerFn, incutFn, footerFn } = props;


    const blockCls = generateBemCls({
        block: CONFIG.bemBlockName, mods: {
            [size]: true
        }, mix
    });

    const mods = {
        'with-header': !!headerFn,
        'with-incut': !!incutFn,
        'with-footer': !!footerFn
    };

    return (
        <div
            className={blockCls}
            id={id}
            ref={reactRef}
            data-test-id={dataTestId}
        >
            {headerFn && (<div className={'atlas-panel__header'}>{headerFn()}</div>)}
            {incutFn && (<div className={'atlas-panel__incut'}>{incutFn()}</div>)}
            {children}
            {footerFn && (<div className={'atlas-panel__footer'}>{footerFn()}</div>)}
        </div>
    );
};