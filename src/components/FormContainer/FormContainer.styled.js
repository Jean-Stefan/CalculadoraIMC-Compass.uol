import styled from 'styled-components';

export const FormContainerStyled = styled.div`
    flex: 0 1 83rem;
    height: 53.5rem;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 15px;
    @media (max-width: 400px) {
        border-radius: 0;
    }
`;

export const SubCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    min-width: 36rem;
    @media (max-width: 400px) {
        min-width: unset;
    }
`;

export const Result = styled.p`
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
    height: 4.5rem;
    min-width: 26.1rem;

    @media (max-width: 400px) {
        font-size: 2.2rem;
    }
`;

export const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
`;
