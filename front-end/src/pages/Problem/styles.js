import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    max-height: 36px;
    max-width: 1200px;
    margin: 0 auto;
    /* padding: 0 30px; */
    display: flex;
    /* margin-top: 100px; */
    align-items: center;
    justify-content: space-between;

    /* align-items: center; */
`;

export const Title = styled.div`
    max-height: 36px;
    max-width: 1200px;
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

export const Content = styled.div`
    /* width: 100%; */
    width: 1200px;
    max-height: 57px;
    margin: 0 auto;
    border: 0;
    border-radius: 4px;
    padding-top: 30px;

    thead th {
        padding-left: 400px;
        color: #000;
        font-size: 16px;
        line-height: 19px;
        font-weight: bold;
        padding: 12px;
        /* padding-top: 30px; */
        padding-right: 140px;
        text-align: left;
        padding-bottom: 10px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 21px solid #f5f5f5;
        height: 57px;
        background: #ffff;

        /* padding-left: 17px; */

        border-radius: 4px;
    }
    th.actions,
    td.actions {
        padding-left: 420px;
    }

    span {
        /* display: flex; */
        margin-top: 5px;
        font-size: 17px;
        line-height: 20px;
    }

    button {
        padding-top: 12px;
        background: transparent;
        border: 0;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#FFFFFF')};
        }
    }

    a {
        align-items: center;
        height: 21px;
        size: 10;
        display: flex;
        color: #999999;
        padding: 12px;
        border-bottom: 1px solid #eeeeee;
        transition: background 0.3s;
        &:hover {
            background: ${darken(0.03, '#ffffff')};
        }

        /* padding-top: 5px; */
    }
    span.Option {
        text-align: left;
        color: #999999;
        /* padding-top: 5px; */
        padding-left: 10px;
        font-size: 16px;
        letter-spacing: 0;
        padding-bottom: 5px;
    }
    span.picture {
        align-items: center;
        display: flex;
    }

    img {
        /* display: flex; */
        padding-right: 5px;
        width: 35px;
        height: 35px;
        border-radius: 50px;
        /* border: 3px solid rgba(255, 255, 255, 0.3);
        background: #eee; */
    }
`;
