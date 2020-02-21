import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    height: 36px;
    width: 1200px;
    margin: 24px auto;
    display: flex;
    /* margin-top: 100px; */
    align-items: center;
    justify-content: space-between;

    /* align-items: center; */
`;

export const Title = styled.div`
    height: 36px;
    width: 1200px;
    margin: 24px auto;
    align-items: center;
    margin-top: 34px;

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
    input {
        background: #ffffff;
        border: 0.5px solid;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        width: 237px;
        height: 36px;
        padding: 0 15px;
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
            margin: 2px 0px 0px 15px;
        }
    }
`;

export const Content = styled.div`
    width: 1200px;
    height: 57px;
    margin: 20px auto;
    border: 0;
    border-radius: 4px;
    /* padding-top: 30px; */
    thead th {
        color: #000;
        text-align: left;
        font-size: 16px;
        line-height: 19px;
        font-weight: bold;
        padding: 12px;

        padding-right: 102px;
    }

    tbody td {
        height: 80px;

        background: #ffff;
        padding: 12px;
        border-bottom: 21px solid #f5f5f5;
    }
    span {
        display: block;
        margin-top: 5px;
        font-size: 16px;
        line-height: 20px;
    }
`;
