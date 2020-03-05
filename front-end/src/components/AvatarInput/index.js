import React, { useState, useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

import PropTypes from 'prop-types';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput({ name, avatarData }) {
    // const { fieldName, defaultValue, registerField } = useField(name);
    const { fieldName, defaultValue, registerField } = useField(name);

    const [file, setFile] = useState(defaultValue && defaultValue.id);

    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef(null);

    useEffect(() => {
        async function previewAvatar() {
            setPreview(avatarData);
        }

        previewAvatar();
    }, [avatarData]);

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: fieldName,
                ref: ref.current,
                path: 'dataset.file',
            });
        }
    }, [ref]); // eslint-disable-line

    // [ref, registerField])

    async function handleChange(e) {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        const response = await api.post('files', data);

        const { id, url } = response.data;

        setFile(id);
        setPreview({ url });
    }
    return (
        <Container>
            <label htmlFor={fieldName}>
                {preview ? (
                    <img src={preview.url} alt="" />
                ) : (
                    <div>
                        <InsertPhotoIcon
                            className="photoIcon"
                            color="disabled"
                            style={{ fontSize: 80 }}
                        />
                        <span className="addPicture">Adicionar foto</span>
                    </div>
                )}
                <input
                    type="file"
                    id={fieldName}
                    accept="image/*"
                    data-file={file}
                    onChange={handleChange}
                    ref={ref}
                />
            </label>
        </Container>
    );
}

AvatarInput.propTypes = {
    name: PropTypes.shape().isRequired,
    avatarData: PropTypes.shape().isRequired,
};
