import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    align-items: center;
    /* padding: 0 110px; */
    margin: auto;
    max-width: 1440;
    width: 90%;
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
    /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
    border-radius: 4px;
    width: 237px;
    height: 36px;
    padding: 0 10px;
    display: flex;
    padding-top: 7px;

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

    div {
        text-align: center;
        display: flex;
        padding-top: 8px;
        /* padding-bottom: 5px; */
        justify-content: center;
        height: 36px;
        width: 142px;
        background: #7d40e7;
        /* font-weight: bold; */
        color: #ffffff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#7d40e7')};
        }
        > strong {
            margin: 2px 0px 0px 5px;
        }
    }
`;

export const Content = styled.table`
    width: 100%;
    /* max-height: 57px; */
    border: 0;
    border-radius: 4px;
    border-collapse: separate;

    border-spacing: 0 20px;

    thead th {
        text-align: left;
        color: #000;
        font-size: 1.6rem;

        line-height: 1.9rem;
        font-weight: bold;
        padding-left: 25px;
        padding-top: 5px;
    }

    tbody td {
        height: 7vh;
        background: #ffff;
        padding: 12px;
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
        font-size: 1.7rem;
        line-height: 2rem;
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

    .recipient-icon {
        text-align: center;
        justify-content: center;
        /* display: flex; */
        align-content: center;
        padding-top: 10px;
        padding-bottom: 20px;
        color: #999999;
    }
    .recipient-img {
        padding-top: 30px;
        width: 70px;
    }
`;
export const PageActions = styled.div`
    background: transparent;
    border: 0;
    display: flex;
    padding-top: 15px;
    justify-content: center;
    .page-number {
        /* margin: 4px 2px 0px 2px; */
        padding: 5px 14px;
        font-size: 12px;
    }
`;

export const ButtonSwitchPages = styled.button`
    background: transparent;
    border: 0;
    div.button-goback {
        text-align: center;
        display: flex;
        padding-top: 6px;
        /* padding-bottom: 5px; */
        justify-content: center;
        height: 36px;
        width: 110px;
        background: #7d40e7;
        /* font-weight: bold; */
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
        /* padding-bottom: 5px; */
        justify-content: center;
        height: 36px;
        width: 110px;
        background: #7d40e7;
        /* font-weight: bold; */
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
