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
`;

export const Title = styled.div`
    h1 {
        color: #444444;
        align-content: center;

        font-size: 24px;
        font-weight: bold;
        width: 100%;
        height: 32px;
        text-align: left;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: 0;
    display: flex;

    div.go-back {
        display: flex;
        justify-content: center;
        padding-top: 7px;

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
    div.submit {
        display: flex;
        justify-content: center;
        padding-top: 7px;
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
            margin: 4px 0px 0px 5px;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 900px;
    height: 220px;
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

    input.name {
        background: #ffffff;
        border: 0.5px solid #eee;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        width: 840px;
        height: 45px;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;
        margin-left: 10px;

        &::placeholder {
            color: #999999;
        }
    }
    p {
        display: flex;
        font-size: 14px;
        font-weight: bold;
        margin-top: 40px;
        padding-left: 10px;
    }
    thead th {
        width: 433px;
        color: #000;
        font-size: 14px;
        /* line-height: 19px; */
        font-weight: bold;
        padding-top: 9px;
        padding-left: 10px;

        /* padding-right: 45px; */

        text-align: left;
    }

    tbody td {
        padding-top: 3px;
        /* height: 57px; */
        padding-left: 10px;
        padding-right: 3px;
        border-radius: 4px;
    }
`;
