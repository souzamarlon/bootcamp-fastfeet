import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background: #ffff;
    padding: 0 30px;
    box-shadow: 20px 0 20px rgba(0, 0, 0, 0.2);
    justify-content: space-between;
    display: flex;
`;
export const Content = styled.div`
    display: flex;
    height: 64px;
    width: 1440px;
    align-items: center;
    nav {
        display: flex;
        align-items: center;
        img {
            display: block;
            width: 135px;
            height: 26px;
            margin-right: 20px;
            padding-right: 20px;
            align-items: center;
            border-right: 1px solid #dddddd;
        }
        a {
            margin-right: 15px;
            font-weight: bold;
            color: #000000;
        }
    }
`;
export const Profile = styled.div`
    display: flex;
    align-items: center;

    /* margin-left: 20px; */
    /* padding-left: 20px; */

    div {
        text-align: right;
        margin-right: 10px;
        strong {
            display: block;
            color: #666666;
            font-size: 14px;
            line-height: 16px;
        }
        button {
            display: 1;
            /* margin-top: 2px; */
            font-size: 12px;
            background: #ffff;
            color: #de3b3b;
            border: 0;
            margin-left: 8px;
        }
    }
`;
