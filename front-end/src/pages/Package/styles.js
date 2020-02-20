import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    height: 64px;
    width: 1200px;
    margin: 24px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* align-items: center; */
`;

export const Title = styled.div`
    h1 {
        color: #444444;
        align-content: center;
        /* display: block; */
        font-size: 24px;
        line-height: 37px;
        font-weight: bold;
        width: 223px;
        height: 38px;
        /* margin-right: 590px; */
        top: 144px;
        /* margin: 0px 200px 0px 0px; */
    }
`;

export const Button = styled.button`
    background: transparent;
    border: 0;
    display: flex;
    button {
        height: 36px;
        width: 142px;
        background: #f94d6a;
        font-weight: bold;
        color: #ffffff;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 0 12px;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#f94d6a')};
        }
        > strong {
            margin: 2px 0px 0px 15px;
        }
    }
    input {
        background: #ffffff;
        border: 0.5px solid;
        /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
        border-radius: 4px;
        width: 237px;
        height: 36px;
        padding: 0 15px;
        color: #999999;
        margin-left: 10px;
        &::placeholder {
            color: #999999;
        }
    }
`;

export const Box = styled.div`
    padding-bottom: 20px;

    tbody td {
        background: #ffff;
        padding: 15px;
        padding-right: 120px;
        /* border-bottom: 1px solid #eee; */
    }
    span {
        display: block;
        margin-top: 5px;
        font-size: 16px;
        line-height: 20px;
    }
`;
export const Content = styled.div`
    max-width: 1200px;
    height: 57px;
    margin: 20px auto;
    /* box-shadow: 0px 0 20px rgba(0, 0, 0, 0.2); */
    border: 0;
    border-radius: 4px;
    thead th {
        color: #000;
        text-align: left;
        font-size: 16px;
        line-height: 19px;
        font-weight: bold;
        padding: 12px;
        padding-top: 30px;
        padding-right: 109px;
    }
`;
