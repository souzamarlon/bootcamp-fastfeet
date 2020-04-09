import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background: #ffff;
    padding: 0 30px;
    box-shadow: 20px 0 20px rgba(0, 0, 0, 0.2);
    justify-content: space-between;
    display: flex;
    /* width: 100vw; */
    /* margin: auto; */
`;
export const Content = styled.div`
    display: flex;
    height: 64px;
    align-items: center;

    nav {
        display: flex;
        align-items: center;
        color: #000000;

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
            font-size: 1.5rem;
            margin-right: 15px;
            font-weight: bold;
            color: #999999;
        }
        a:hover {
            color: #000000;
        }
        .active {
            color: #000000;
        }
    }
`;
export const Profile = styled.div`
    display: flex;
    align-items: center;

    div {
        text-align: right;
        margin-right: 10px;
        strong {
            display: block;
            color: #666666;
            font-size: 1.4rem;
            line-height: 1.6rem;
        }
        button {
            display: 1;
            font-size: 1.2rem;
            background: #ffff;
            color: #de3b3b;
            border: 0;
            margin-left: 8px;
        }
    }
`;
