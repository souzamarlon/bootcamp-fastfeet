import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    align-items: center;
    /* background: #ffff; */
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
    /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
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
    padding-top: 20px;

    thead th {
        width: 1200px;
        text-align: left;
        color: #000;
        font-size: 16px;
        line-height: 19px;
        font-weight: bold;
        padding-left: 25px;
        padding-bottom: 10px;
    }

    tbody td {
        height: 57px;
        background: #ffff;
        padding: 12px;
        padding-left: 25px;
        border-bottom: 21px solid #f5f5f5;
        border-radius: 4px;
    }
    span {
        /* display: flex; */
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
        width: 190px;
        border: 0;
        display: flex;
        padding: 5px;
        padding-bottom: 30px;
        border-bottom: 1px solid #eeeeee;

        color: #999999;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#ffffff')};
        }
    }

    a {
        text-align: left;
        align-items: center;
        /* width: 100%; */
        padding-bottom: 30px;
        display: flex;
    }
    span.options {
        display: flex;
        text-align: left;
        width: 100%;
        color: #999999;
        padding-left: 10px;
        font-size: 16px;
    }
    span.deliverer {
        align-items: center;
        display: flex;
    }

    img.avatar {
        /* display: flex; */
        padding-right: 5px;
        width: 35px;
        height: 35px;
        border-radius: 50px;
        /* border: 3px solid rgba(255, 255, 255, 0.3);
        background: #eee; */
    }
`;
