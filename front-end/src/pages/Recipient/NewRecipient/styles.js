import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    height: 64px;
    width: 100%;
    max-width: 900px;
    padding-top: 30px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* align-items: center; */
`;

export const Title = styled.div`
    h1 {
        color: #444444;
        align-content: center;

        font-size: 24px;
        /* line-height: 37px; */
        font-weight: bold;
        width: 100%;
        height: 32px;
        text-align: left;

        /* margin-right: 590px; */

        /* margin: 0px 200px 0px 0px; */
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
        width: 112px;
        background: #cccccc;
        font-weight: bold;
        color: #ffffff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#CCCCCC')};
        }
        > strong {
            margin: 4px 2px 0px 2px;
        }
    }
    > button.submit {
        display: flex;
        justify-content: center;
        height: 36px;
        width: 112px;
        margin-left: 16px;
        background: #7d40e7;
        font-weight: bold;
        color: #ffffff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#7D40E7')};
        }
        > strong {
            margin: 5px 0px 0px 5px;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 900px;
    height: 300px;
    margin: 0px auto;
    /* padding: 10px; */
    background: #ffff;
    box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;

    background: #ffffff;
`;

export const FormInput = styled.div`
    width: 100%;
    max-width: 900px;
    padding-top: 26px;
    margin: 20px;
    display: flex;
    flex-direction: column;

    input {
        background: #ffffff;
        border: 0.5px solid #eee;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        width: 840px;
        height: 45px;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;
        &::placeholder {
            color: #999999;
        }
    }

    p {
        display: flex;
        font-size: 14px;
        font-weight: bold;
        margin-top: 8px;
    }
    thead th {
        width: 900px;
        color: #000;
        font-size: 14px;
        /* line-height: 19px; */
        font-weight: bold;
        padding-top: 9px;
        text-align: left;
    }
    thead.cityState th {
        width: 216px;
        color: #000;
        font-size: 14px;
        /* line-height: 19px; */
        font-weight: bold;
        padding-top: 7px;
        text-align: left;
    }
    th.street {
        width: 518px;
        padding-right: 502px;
    }

    tbody td {
        padding-top: 3px;
        height: 57px;
        padding-right: 13px;
        border-radius: 4px;
    }

    input.street {
        background: #ffffff;
        border: 0.5px solid #eee;
        border-radius: 4px;
        width: 518px;
        height: 45px;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;
        &::placeholder {
            color: #999999;
        }
    }

    input.address {
        background: #ffffff;
        border: 0.5px solid #eee;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        width: 100%;
        max-width: 148px;

        height: 45px;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;
        &::placeholder {
            color: #999999;
        }
    }

    input.cityState {
        background: #ffffff;
        border: 0.5px solid #eee;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        width: 100%;
        max-width: 269px;

        height: 45px;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;
        &::placeholder {
            color: #999999;
        }
    }
`;
