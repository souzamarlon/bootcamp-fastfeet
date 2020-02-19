import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(-90deg, #ee4d64, #ee4d64);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    background: #ffffff;
    width: 360px;
    height: 448px;
    /* left: 540px; */
    /* top: 226px; */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 4px;
`;
export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        input {
            background: #ffffff;
            border: 0.5px solid #eee;
            /* box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); */
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #999999;
            margin: 5px 0 10px;
            &::placeholder {
                color: #999999;
            }
        }
        span {
            color: #999999;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }
        button {
            margin: 5px 0 0;
            height: 45px;
            background: #ee4d64;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.03, '#EE4D64')};
            }
        }
        p {
            display: flex;
            font-size: 14px;
            /* padding: 0 15px; */
            font-weight: bold;
            margin-top: 13px;
        }
    }
`;
