import styled from "styled-components";
import Background from '../../assets/RegisterBackground.svg'

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 40px;
    background-image: url("${Background}");
    background-size: cover;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 50px 35px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
`;

export const H1 = styled.h1`
    text-align: center;
    margin-bottom: 60px;
    font-size: 34px;
    font-weight: 700;
    color: #FFFFFF;
`;

export const Label = styled.p`
    padding-left: 25px;
    font-size: 18px;
    font-weight: 400;
    color: #EEEEEE;
    letter-spacing: -0.408px;
`;

export const Input = styled.input`
    width: 345px;
    height: 50px;
    margin-bottom: 30px;
    padding-left: 25px;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 14px;
    outline: none;
    &::placeholder {
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 342px;
    height: 74px;
    margin-top: 74px;
    font-size: 17px;
    color: #FFFFFF;
    background: rgba(0, 0, 0, 0.8);
    border: none;
    border-radius: 14px;
    outline: none;
    cursor: pointer;
    img {
        display: none;
        transform: scale(-1);
    }
    :hover {
        img {
            display: block;
        }
    }
`;