import React from 'react';
import {
    StyledRange,
    StyledLabel,
    StyledIndicator,
    RangeContainer,
    StyledInfo,
    StyledScroll,
} from './RangePicker.styled';

const RangePicker = ({
    label,
    onChange,
    min,
    max,
    step,
    defaultValue,
    counter,
}) => {
    return (
        <RangeContainer>
            <StyledInfo>
                <StyledLabel>{label}</StyledLabel>
                <StyledIndicator counter>{counter}</StyledIndicator>
            </StyledInfo>
            <StyledScroll>
                <StyledRange
                    type={'range'}
                    min={min}
                    max={max}
                    step={step}
                    onChange={onChange}
                    defaultValue={defaultValue}
                />
            </StyledScroll>
        </RangeContainer>
    );
};

export default RangePicker;
