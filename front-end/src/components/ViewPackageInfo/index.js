import React from 'react';
import Popup from 'reactjs-popup';
import { Visibility } from '@material-ui/icons';
import { deepPurple } from '@material-ui/core/colors';
import { Container } from './styles';

export default function ViewPackageInfo({ data }) {
    console.tron.log(data);
    return (
        <Container>
            <Popup
                trigger={
                    <div>
                        <button type="button">
                            <Visibility
                                fontSize="small"
                                style={{
                                    color: deepPurple[400],
                                }}
                            />
                            <span>Visualizar</span>
                        </button>
                    </div>
                }
                modal
            >
                {close => (
                    <div className="modal">
                        <a href hclassName="close" onClick={close}>
                            &times;
                        </a>
                        <div className="header">PERGUNTA DO ALUNO</div>

                        <div className="resp">SUA RESPOSTA</div>
                    </div>
                )}
            </Popup>
        </Container>
    );
}
