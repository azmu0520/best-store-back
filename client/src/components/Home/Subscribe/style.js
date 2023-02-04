import styled from 'styled-components';
import {ReactComponent as eyes} from '../../../assets/icons/eyes.svg'


const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 130px;
    background: #1D72D2;
    justify-content: center;
`

const Wrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    display: flex;
`

Wrapper.Wrapper = styled.div`
    display: flex;
    width: 100%;
`

Wrapper.Eyes = styled(eyes)``

Wrapper.Item = styled.div`
    margin-left: 20px;
`
Wrapper.Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    /* text-align: center; */
    color: #FFFFFF;
`

Wrapper.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 6px;
`

export { Container, Wrapper }