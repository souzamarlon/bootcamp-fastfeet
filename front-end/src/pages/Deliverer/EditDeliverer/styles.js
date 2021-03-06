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
        width: 142px;
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
        width: 142px;
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
    margin-top: 20px;
    background: #ffff;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    height: 43vh;

    input {
        background: #ffffff;
        border: 0.5px solid #eee;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        width: 44vw;
        height: 5vh;
        padding: 0 15px;
        color: #999999;
        margin: 5px 0 10px;
        &::placeholder {
            color: #999999;
        }
    }

    p {
        display: flex;
        font-size: 1.4rem;
        font-weight: bold;
        margin-top: 13px;
    }
`;
