import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    align-items: center;
    /* padding: 0 110px; */
    margin: auto;
    max-width: 1440;
    width: 90%;
`;

export const Title = styled.div`
    max-height: 36px;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 34px;

    span {
        color: #444444;
        align-content: center;
        font-size: 2.4rem;
        line-height: 37px;
        font-weight: bold;
        width: 223px;
        height: 38px;
    }
`;

export const Content = styled.div`
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding-top: 22px;

    th.delivery {
        padding-right: 100px;
    }

    thead th {
        width: 1200px;
        color: #000;
        font-size: 1.6rem;
        line-height: 1.9rem;
        font-weight: bold;
        padding: 12px;
        text-align: left;
        padding-bottom: 10px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 21px solid #f5f5f5;
        height: 9vh;
        background: #ffff;
        border-radius: 4px;
    }
    th.action {
        align-items: center;
        text-align: right;
        padding-right: 25px;
    }

    td.action {
        align-items: center;
        text-align: right;
        padding-right: 35px;
    }

    span {
        margin-top: 5px;
        font-size: 1.7rem;
    }
    .max-lines {
        font-size: 1.7rem;
        display: inline-block;
        width: 900px;
        word-wrap: break-word;
        overflow: hidden;
    }

    button {
        background: transparent;
        padding-top: 5px;
        border: 0px;

        div.iconMoreHoriz {
            padding-top: 5px;

            border-radius: 50%;
        }
    }

    button.actions {
        align-items: center;
        height: 30px;
        width: 193px;
        border: 0;
        display: flex;
        text-align: left;
        padding: 5px;

        color: #999999;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#ffffff')};
        }
    }

    a {
        text-align: left;
        align-items: center;
        padding-bottom: 30px;
        display: flex;
        color: #999999;
    }
    span.options {
        text-align: left;
        align-items: center;
        color: #999999;
        padding-left: 10px;
        font-size: 1.6rem;
    }

    .warning-text {
        text-align: center;
        justify-content: center;
        align-content: center;
        padding-top: 10px;
        padding-bottom: 20px;
        color: #999999;
    }
    .warning-img {
        padding-top: 30px;
    }
`;

export const PageActions = styled.div`
    background: transparent;
    border: 0;
    display: flex;
    padding-top: 15px;
    justify-content: center;

    .page-number {
        padding: 5px 14px;
        font-size: 1.2rem;
    }
`;

export const ButtonSwitchPages = styled.button`
    background: transparent;
    border: 0;
    div.button-goback {
        text-align: center;
        display: flex;
        padding-top: 6px;
        justify-content: center;
        height: 36px;
        width: 110px;
        background: #7d40e7;
        color: #ffffff;
        border: 0;
        border-radius: 50px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#7d40e7')};
        }
        strong.text-goback {
            margin-top: 3px;
        }
    }

    div.button-next {
        text-align: center;
        display: flex;
        padding-top: 6px;
        justify-content: center;
        height: 36px;
        width: 110px;
        background: #7d40e7;
        color: #ffffff;
        border: 0;
        border-radius: 50px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#7d40e7')};
        }

        strong.text-next {
            margin: 3px 0 0 10px;
        }
    }
`;
