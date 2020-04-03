import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    border-bottom: 1px solid #eeeeee;

    button.button-view {
        align-items: center;
        margin-top: 0;
        width: 140px;
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
        font-size: 16px;
        width: 140px;
    }
`;

export const Content = styled.div`
    text-align: left;
    width: 450px;
    height: 500px;
    padding-top: 25px;

    h1.title {
        text-align: left;
        font-weight: bold;
        font-size: 17px;
        color: #444444;
        padding-left: 11px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    h1.header {
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        color: #444444;
        padding-left: 11px;
        padding-top: 10px;
    }
    span.address {
        color: #666666;
        font-size: 16px;
        text-align: left;
        border-bottom: 1px solid #eeeeee;
        padding-top: 4px;
        padding-bottom: 8px;
        display: inline-block;
        width: 100%;
        line-height: 20px;
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
        font-size: 16px;
        color: #444444;
        padding-left: 11px;
        padding-top: 10px;
    }

    div {
        text-align: left;
        width: 200px;
        /* width: 100%; */
        display: flex;
        span.status {
            /* display: flex; */
            color: #666666;
            font-size: 16px;
            font-weight: bold;
        }

        span.date {
            width: 200px;

            text-align: left;
            color: #666666;
            font-size: 16px;
            /* display: flex; */

            /* border-bottom: 1px solid #eeeeee; */
        }
    }
`;

export const Signatures = styled.div`
    justify-content: center;
    text-align: center;
    display: flex;

    img.imgName {
        width: 100%;
        max-width: 200px;
        height: 56px;
        border: 0;
        padding-top: 23px;
        /* padding-left: 108px; */
        /* border-radius: 10px;

    /* width: 234px;
    height: 36px;
    border: 0;
    border-radius: 10px; */
    }
`;
