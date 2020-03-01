import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    border-bottom: 1px solid #eeeeee;

    button {
        align-items: center;
        margin-top: 0;
        width: 190px;
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
        font-size: 16px;
    }
`;

export const Content = styled.div`
    text-align: left;
    width: 450px;
    height: 353px;
    padding-top: 25px;

    h1.header {
        text-align: left;
        font-weight: bold;
        font-size: 14px;
        color: #444444;
        padding-left: 11px;
        padding-top: 10px;
    }
    span.detail {
        /* width: 397px; */
        height: 316px;
        color: #666666;
        font-size: 16px;
        text-align: left;
        /* border-bottom: 1px solid #eeeeee; */
        padding-top: 4px;
        padding-bottom: 8px;
    }
`;
