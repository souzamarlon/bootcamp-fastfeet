import React, { useRef, useEffect } from 'react';
import AsyncSelect from 'react-select/async';

import { useField } from '@rocketseat/unform';
import { Container } from './styles';

export default function ReactSelect({ name, label, options, ...rest }) {
    const ref = useRef(null);

    const { registerField, error } = useField('deliveryman_id');

    function parseSelectValue(selectRef) {
        const selectValue = selectRef.select.state.value;

        return selectValue ? selectValue.id : '';
    }

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'deliveryman_id',
                ref: ref.current,
                path: 'state.value',
                parseValue: parseSelectValue,
                clearValue: selectRef => {
                    selectRef.select.clearValue();
                },
            });
        }
    }, [ref]); // eslint-disable-line

    return (
        <Container>
            {label && <label htmlFor="deliveryman_id">{label}</label>}

            <AsyncSelect
                name="deliveryman_id"
                cacheOptions
                aria-label="deliveryman_id"
                loadOptions={options}
                isMulti={false}
                ref={ref}
                getOptionValue={option => option.id}
                getOptionLabel={option => option.name}
                {...rest}
            />

            {error && <span>{error}</span>}
        </Container>
    );
}
