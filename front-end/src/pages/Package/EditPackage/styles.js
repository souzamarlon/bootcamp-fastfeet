import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    align-items: center;
    margin: auto;
    width: 48%;
`;

export const Header = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.div`
    h1 {
        color: #444444;
        align-content: center;

        font-size: 2.4rem;
        font-weight: bold;
        width: 100%;
        height: 3vh;
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
        width: 110px;
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
            font-size: 1.4rem;
            margin: 4px 2px 0px 2px;
        }
    }
    div.submit {
        display: flex;
        justify-content: center;
        padding-top: 7px;
        height: 36px;
        width: 110px;
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
            font-size: 1.4rem;
            margin: 4px 0px 0px 5px;
        }
    }
`;

export const FormInput = styled.table`
    height: 22vh;
    border: 0;
    border-radius: 4px;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);

    background: #ffffff;

    display: flex;
    flex-direction: column;

    thead th {
        width: 440px;
        color: #000;
        font-size: 1.4rem;

        font-weight: bold;
        padding-top: 26px;
        padding-left: 30px;
        text-align: left;
    }

    tbody td {
        padding-top: 10px;
        /* height: 57px; */
        padding-left: 30px;
        border-radius: 4px;
    }

    input.name {
        background: #ffffff;
        border: 0.5px solid #eee;
        border-radius: 4px;
        width: 44vw;
        height: 5vh;
        padding: 0 15px;
        color: #999999;

        &::placeholder {
            color: #999999;
        }
    }
`;
