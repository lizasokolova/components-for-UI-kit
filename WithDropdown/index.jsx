import React, { useState, useEffect, useRef } from 'react';
import { CONFIG } from './config';
import { generateBemCls, handleClickOutside } from '../../utils';

/**
 * { 
 * trigger: 'click' | 'hover', 
 * position: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right' 
 * }
 */
export const WithDropdown = (OriginalActivator) => (OriginalOverlay) => (props) => (activatorProps) => {

    const { trigger, position } = props;

    const blockRef = useRef(null);
    const [isOpened, setOpened] = useState(false);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => handleClickOutside(blockRef.current, () => setOpened(false)), [isOpened]);

    useEffect(() => {
        setVisible(isOpened);
    }, [!!blockRef.current, isOpened]);

    const blockCls = generateBemCls({ block: CONFIG.bemBlockName, mix: activatorProps.mix });
    const activatorCls = generateBemCls({ block: CONFIG.bemBlockName, elem: 'activator' });
    const overlayCls = generateBemCls({ block: CONFIG.bemBlockName, elem: 'overlay', mods: { [position]: true, 'hidden': !isVisible } });

    const handleActivatorClick = () => trigger === 'click' ? setOpened(!isOpened) : null;
    const handleHover = (isOpened) => () => trigger === 'hover' ? setOpened(isOpened) : null;

    return (
        <div
            className={blockCls}
            ref={blockRef}
            onMouseEnter={handleHover(true)}
            onMouseLeave={handleHover(false)}
        >
            <div className={activatorCls} onClick={handleActivatorClick}>
                <OriginalActivator isActive={isOpened} {...activatorProps} />
            </div>
            {isOpened === true && (
                <div className={overlayCls}>
                    <OriginalOverlay />
                </div>
            )}
        </div>
    );
};