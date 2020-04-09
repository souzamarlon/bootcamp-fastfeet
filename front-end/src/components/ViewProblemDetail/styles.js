import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    border-bottom: 1px solid #eeeeee;

    button {
        align-items: center;
        margin-top: 0;
        width: 9.89vw;
        display: flex;
        padding: 5px;
        border: 0;

        color: #999999;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#ffffff')};
        }
    }
    span {
        display: flex;
        text-align: left;
        color: #999999;
        padding-left: 10px;
        font-size: 1.6rem;
    }
`;

export const Content = styled.div`
    text-align: left;
    width: 24vw;
    height: 45vh;
    padding-top: 25px;

    h1.header {
        text-align: left;
        font-weight: bold;
        font-size: 1.6rem;
        color: #444444;
        padding-left: 20px;
        padding-top: 10px;
    }
    span.detail {
        color: #666666;
        font-size: 1.6rem;
        text-align: left;
        padding-top: 4px;
        padding-bottom: 8px;
        padding: 0 20px;
        display: inline-block;
        width: 100%;
        line-height: 20px;
        word-wrap: break-word;
        overflow: hidden;
    }
`;
