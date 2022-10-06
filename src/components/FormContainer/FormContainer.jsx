import React, {useState} from 'react';
import Button from '../Button/Button';
import RangePicker from '../RangePicker/RangePicker';
import {TitleStyled} from '../Title/Title.styled';
import {
    FormContainerStyled,
    SubCard,
    Result,
    InputsContainer,
} from './FormContainer.styled';

const FormContainer = () => {
    const [altura, setAltura] = useState(1);
    const [peso, setPeso] = useState(1);
    const [imc, setImc] = useState();
    const [message, setMessage] = useState();

    const calcularImc = (peso, altura) => {
        const imc = peso / (altura * altura);
        if (imc < 18.5) setMessage('Abaixo do Peso');
        else if (imc < 25) setMessage('Peso Normal');
        else if (imc > 25 && imc < 30) setMessage('Sobrepeso');
        else if (imc > 30 && imc < 35) setMessage('Obesidade 1');
        else if (imc > 35 && imc < 49) setMessage('Obesidade 2');
        else setMessage('Obesidade 3');
        setImc(Number(imc).toFixed(2));
    };

    return (
        <FormContainerStyled>
            <SubCard>
                <TitleStyled>Calcule seu IMC</TitleStyled>
                <InputsContainer>
                    <RangePicker
                        label={'Peso'}
                        min='1'
                        max='150'
                        step='1'
                        defaultValue='1'
                        counter={peso}
                        onChange={(event) => {
                            setPeso(event.target.valueAsNumber);
                        }}
                    />
                    <RangePicker
                        label={'Altura'}
                        min='1'
                        max='2.2'
                        step='0.01'
                        defaultValue='1'
                        counter={altura}
                        onChange={(event) => {
                            setAltura(event.target.valueAsNumber.toFixed(2));
                        }}
                    />
                </InputsContainer>
                <Button onClick={() => calcularImc(peso, altura)}>
                    Calcular
                </Button>
                <Result>{imc && `IMC: ${imc} ${message}`}</Result>
            </SubCard>
        </FormContainerStyled>
    );
};

export default FormContainer;
