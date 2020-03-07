import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    align-items: center;
    padding: 0 110px;
`;

export const Title = styled.div`
    max-height: 36px;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 34px;

    span {
        color: #444444;
        align-content: center;
        font-size: 24px;
        line-height: 37px;
        font-weight: bold;
        width: 223px;
        height: 38px;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-height: 95px;
    border: 0;
    border-radius: 4px;
    /* padding-top: 20px; */

    th.delivery {
        padding-right: 100px;
    }

    thead th {
        width: 1200px;
        color: #000;
        font-size: 16px;
        line-height: 19px;
        font-weight: bold;
        padding: 12px;
        /* padding-top: 30px; */
        text-align: left;
        /* padding-left: 25px; */
        padding-bottom: 10px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 21px solid #f5f5f5;
        height: 57px;
        background: #ffff;
        /* padding-left: 25px; */

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
        /* width: 825px; */
        /* display: flex; */
        margin-top: 5px;
        font-size: 17px;
    }
    .max-lines {
        font-size: 17px;
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
        font-size: 16px;
    }
`;

export const PageActions = styled.div`
    background: transparent;
    border: 0;
    width: 100%;
    display: flex;
    padding-top: 15px;
    justify-content: center;

    button.pages-button {
        text-align: center;

        padding-bottom: 5px;
        display: flex;
        justify-content: center;
        height: 36px;
        width: 110px;
        background: #7d40e7;
        font-weight: bold;
        color: #ffffff;
        border: 0;
        border-radius: 50px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#7d40e7')};
        }
        strong.page-before {
            margin: 4px 2px 0px 0px;
        }
        strong.page-next {
            margin: 4px 2px 0px 10px;
        }
    }
    .page-number {
        /* margin: 4px 2px 0px 2px; */
        padding: 5px 14px;
        font-size: 12px;
    }
`;
