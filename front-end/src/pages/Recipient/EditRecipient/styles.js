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
        /* line-height: 37px; */
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

export const FormInput = styled.div`
    height: 32vh;
    border: 0;
    border-radius: 4px;
    border-collapse: collapse;
    margin-top: 20px;
    padding-top: 20px;
    box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2);
    padding-left: 30px;

    background: #ffffff;
    display: flex;
    flex-direction: column;

    input {
        background: #ffffff;
        border: 0.5px solid #eee;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        width: 43.75vw;
        height: 5vh;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;
        &::placeholder {
            font-size: 1.4rem;
            color: #999999;
        }
    }

    thead th {
        width: 85%;
        color: #000;
        font-size: 1.4rem;
        /* line-height: 19px; */
        font-weight: bold;
        padding-top: 9px;
        text-align: left;
        padding-right: 105px;
    }

    tbody td {
        padding-top: 3px;
        height: 6vh;
        padding-right: 13px;
        border-radius: 4px;
    }

    input.street {
        background: #ffffff;
        border: 0.5px solid #eee;
        border-radius: 4px;
        width: 26.97vw;
        height: 5vh;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;
        &::placeholder {
            font-size: 1.4rem;
            color: #999999;
        }
    }

    input.address {
        background: #ffffff;
        border: 0.5px solid #eee;
        border-radius: 4px;
        width: 100%;
        max-width: 148px;
        height: 5vh;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;
        &::placeholder {
            font-size: 1.4rem;
            color: #999999;
        }
    }

    thead.cityState th {
        width: 15vw;
        color: #000;
        font-size: 1.4rem;
        /* line-height: 19px; */
        font-weight: bold;
        padding-top: 7px;
        text-align: left;
    }

    input.cityState {
        background: #ffffff;
        border: 0.5px solid #eee;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        width: 14.16vw;
        height: 5vh;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;
        &::placeholder {
            font-size: 1.4rem;
            color: #999999;
        }
    }
`;
