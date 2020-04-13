import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    border-bottom: 1px solid #eeeeee;

    button.button-view {
        align-items: center;
        margin-top: 0;
        width: 7.29vw;
        display: flex;
        padding: 5px;
        border: 0;
        background: transparent;
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
        width: 7.29vw;
    }
`;

export const Content = styled.div`
    text-align: left;
    width: 23.43vw;
    height: 53vh;
    padding-top: 25px;

    h1.title {
        text-align: left;
        font-weight: bold;
        font-size: 1.7rem;
        color: #444444;
        padding-left: 11px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    h1.header {
        text-align: center;
        font-weight: bold;
        font-size: 1.6rem;
        color: #444444;
        padding-left: 11px;
        padding-top: 10px;
    }
    span.address {
        color: #666666;
        font-size: 1.6rem;
        text-align: left;
        border-bottom: 1px solid #eeeeee;
        padding-top: 4px;
        padding-bottom: 8px;
        display: inline-block;
        width: 100%;
        line-height: 2rem;
        word-wrap: break-word;
        overflow: hidden;
    }
`;

export const Dates = styled.div`
    border-bottom: 1px solid #eeeeee;
    padding-top: 4px;
    padding-bottom: 8px;

    h1.header {
        text-align: center;
        font-weight: bold;
        font-size: 1.6rem;
        color: #444444;
        padding-left: 11px;
        padding-top: 10px;
    }

    div {
        text-align: left;
        width: 10.41vw;
        display: flex;
        span.status {
            /* display: flex; */
            color: #666666;
            font-size: 1.6rem;
            font-weight: bold;
        }

        span.date {
            width: 10.41vw;
            text-align: left;
            color: #666666;
            font-size: 1.6rem;
        }
    }
`;

export const Signatures = styled.div`
    justify-content: center;
    align-self: center;
    display: flex;

    img.imgName {
        width: 15.62vw;
        height: 11vh;
        border: 0;
        padding-top: 10px;
    }
`;
