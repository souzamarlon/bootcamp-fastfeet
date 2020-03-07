import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    align-items: center;
    padding: 0 110px;
`;

export const Header = styled.div`
    max-height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.div`
    max-height: 36px;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 43px;

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

export const Search = styled.div`
    background: #ffffff;
    border: 0.5px solid;
    border-radius: 4px;
    width: 237px;
    height: 36px;
    padding: 0 10px;
    display: flex;
    padding-top: 5px;

    input {
        padding-top: 3px;
        padding-left: 3px;
        border: 0;
        color: #999999;

        &::placeholder {
            color: #999999;
        }
    }
`;

export const Button = styled.button`
    background: transparent;
    border: 0;
    display: flex;
    button {
        display: flex;
        justify-content: center;
        height: 36px;
        width: 142px;
        background: #7d40e7;
        font-weight: bold;
        color: #ffffff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#7d40e7')};
        }
        > strong {
            /* margin: 2px 0px 0px 15px; */
            margin: 4px 0px 0px 5px;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    max-height: 57px;
    border: 0;
    border-radius: 4px;
    padding-top: 22px;

    thead th {
        width: 1200px;
        color: #000;
        font-size: 16px;
        line-height: 19px;
        font-weight: bold;
        text-align: left;
        padding-bottom: 10px;
        padding-left: 25px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 21px solid #f5f5f5;
        height: 57px;
        background: #ffff;
        padding-left: 25px;
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
        font-size: 17px;
        line-height: 20px;
    }

    button {
        background: transparent;
        padding-top: 5px;
        border: 0px;

        div.iconMoreHoriz {
            padding-top: 5px;
            border-radius: 50%;
            transition: background 0.15s;
            &:hover {
                background: ${darken(0.1, '#ffff')};
            }
        }
    }

    button.actions {
        align-items: center;
        height: 30px;
        width: 140px;
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
        padding: 5px;
        text-align: left;
        align-items: center;
        display: flex;
        color: #999999;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#ffffff')};
        }
    }
    span.options {
        text-align: left;
        align-items: center;
        color: #999999;
        padding-left: 10px;
        font-size: 16px;
    }
    hr.break-line {
        padding-top: 3px;
        border: 0;
        border-bottom: 1px solid #eeeeee;
    }

    img {
        padding-right: 5px;
        width: 35px;
        height: 35px;
        border-radius: 100%;
        align-items: center;
        display: flex;
    }
`;

export const PageActions = styled.div`
    background: transparent;
    border: 0;
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
            /* margin: 2px 0px 0px 15px; */
            margin: 4px 2px 0px 0px;
        }
        strong.page-next {
            /* margin: 2px 0px 0px 15px; */
            margin: 4px 2px 0px 10px;
        }
    }
    .page-number {
        /* margin: 4px 2px 0px 2px; */
        padding: 5px 14px;
        font-size: 12px;
    }
`;
