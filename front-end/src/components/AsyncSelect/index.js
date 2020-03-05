import React, { useRef, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';
import { Container } from './styles';

export default function ReactSelect({ name, label, options, ...rest }) {
    const ref = useRef(null);

    const { fieldName, registerField, error } = useField(name);

    function parseSelectValue(selectRef) {
        const selectValue = selectRef.select.state.value;

        return selectValue ? selectValue.id : '';
    }

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: fieldName,
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
            {label && <label htmlFor={fieldName}>{label}</label>}

            <AsyncSelect
                name={fieldName}
                cacheOptions
                aria-label={fieldName}
                loadOptions={options}
                defaultValue
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

ReactSelect.propTypes = {
    name: PropTypes.shape().isRequired,
    label: PropTypes.shape().isRequired,
    options: PropTypes.shape().isRequired,
};
