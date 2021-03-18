import React, { useState, useEffect } from 'react';
import { ControlWrapper, Input, Icon, Icons } from 'atlas-ui';

export const PasswordField = (props) => {

    const {
        tryTranslate, passwordWarnings = [],
        dataTestId, onChange, value, mix, hasError,
        title, autocomplete, label, helps, maxLength,
        emptyCaption, isDisabled
    } = props;

    const [inputType, setInputType] = useState('password');
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    useEffect(() => {
        document.onkeyup = function (e) {
            e = e || window.event;
            setIsCapsLockOn(e.getModifierState && e.getModifierState('CapsLock'));
        };
        return () => document.onkeyup = null;
    }, []);

    const switchType = () => {
        if (inputType === 'password') {
            setInputType('text');
        } else {
            setInputType('password');
        }
    };

    const currentLabel = () => inputType === 'password' ? tryTranslate('Показать') : tryTranslate('Скрыть');
    const currentIcon = () => inputType === 'password' ? Icons.EyeClose : Icons.EyeOpen;
    const warnings = [...passwordWarnings, isCapsLockOn ? tryTranslate('Caps Lock включен') : null].filter(Boolean);

    return (
        <ControlWrapper
            pattern='common'
            label={label}
            errors={warnings}
            mix='password-field'
            tips={helps}
        >
            <Input
                isFullWidth
                autofocus
                size='lg'
                type={inputType}
                autocomplete={autocomplete}
                dataTestId={dataTestId}
                value={value}
                onChange={onChange}
                name='pass'
                mix='password-field__input'
                hasError={hasError}
                maxLength={maxLength}
                emptyCaption={emptyCaption}
                isDisabled={isDisabled}
            >
                <Icon
                    title={''}
                    onClick={() => switchType()}
                    mix='password-field__icon'
                    ariaLabel={currentLabel()}
                >
                    {currentIcon()};
                </Icon>
            </Input>
        </ControlWrapper>
    );
};
