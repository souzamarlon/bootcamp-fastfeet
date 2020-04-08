import styled from 'styled-components';

export const Container = styled.div`
    width: 408px;
    align-items: center;
    font-size: 1.4rem;
    background: #ffffff;

    height: 2vh;
    line-height: 1rem;
    color: #999999;
    margin-right: 12px;

    @media (min-width: 1217px) {
        .select-style {
            width: 100%;
        }
    }

    @media (max-width: 890px) {
        .select-style {
            width: 90%;
        }
    }
`;
