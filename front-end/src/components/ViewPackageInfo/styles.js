import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    div {
        button {
            align-items: center;
            margin-top: 0;
            width: 190px;
            display: flex;
            padding: 5px;
            border: 0;
            /* padding-bottom: 30px; */

            border-bottom: 1px solid #eeeeee;

            color: #999999;
            transition: background 0.3s;
            &:hover {
                background: ${darken(0.03, '#ffffff')};
            }
        }
        span {
            display: flex;
            text-align: left;
            color: #999999;
            padding-left: 10px;
            font-size: 16px;
        }
    }
`;
