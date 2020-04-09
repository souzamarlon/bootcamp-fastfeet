import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;

    label {
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
        img {
            margin-top: 25px;
            width: 150px;
            height: 16vh;
            border-radius: 100%;
            border: 3px solid rgba(255, 255, 255, 0.3);
            background: #ffffff 0% 0% no-repeat padding-box;
            justify-content: center;
        }
        input {
            display: none;
        }
        div {
            margin-top: 25px;
            padding-left: 23px;
            padding-top: 10px;
            width: 100%;
            max-width: 150px;
            height: 16vh;
            border-radius: 100%;
            border: 1px dashed #dddddd;
            background: #ffffff 0% 0% no-repeat padding-box;
            justify-content: center;
        }

        .photoIcon {
            padding-left: 25px;
            justify-content: center;
            padding-top: 25px;
        }
        span.addPicture {
            letter-spacing: 0;
            font-size: 1.6rem;
            color: #dddddd;
            padding-left: 3px;
        }
    }
`;
