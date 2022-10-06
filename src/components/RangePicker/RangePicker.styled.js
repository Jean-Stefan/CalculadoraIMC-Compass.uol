import styled from 'styled-components';

export const RangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
`;

export const StyledInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const StyledScroll = styled(StyledInfo)`
    justify-content: center;
`;

export const StyledLabel = styled.label`
    font-size: 2.4rem;
    font-weight: 300;
    margin-top: 0.8rem;
`;

export const StyledRange = styled.input`
    -webkit-appearance: none;
    flex: 1 1 35rem;
    height: 2.5rem;
    background: #ffffff;
    border-radius: 4px;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        background: #f7b718;
        cursor: pointer;
        border-color: #f7b718;
    }

    ::-moz-range-thumb {
        -webkit-appearance: none;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        background: #f7b718;
        cursor: pointer;
        border-color: #f7b718;
    }
`;

export const StyledIndicator = styled.p`
    margin: 0;
    font-size: 4rem;
    font-weight: 300;
    color: #f7b718;
`;
