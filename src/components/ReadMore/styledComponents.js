// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 25px;
`
export const Caption = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #334155;
`
export const Image = styled.img`
  height: 300px;
  width: 500px;
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #334155;
`
export const Button = styled.button`
  height: 35px;
  width: 70px;
  border: none;
  border-radius: 5px;
  background-color: #1f81ff;
  font-family: 'Roboto';
  font-size: 10px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
`
