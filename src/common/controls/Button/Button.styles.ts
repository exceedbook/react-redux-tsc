import isString from 'lodash/isString'

import styled from 'styled-components';

import { GRADIENT_PRIMARY_COLOR, TEXT_COLOR, GRADIENT_SECONDARY_COLOR } from '@/styles';
interface IButtonComponents {
  width?: number | string;
  height?: number;
}
export const ButtonComponents = styled.button`
  border: none;
  z-index: 20;
  position: relative;
  padding: 5px 25px;
  &:focus {outline:0;}
  cursor: pointer;
`;
export const ButtonShadow = styled.div`
  position: absolute;
  margin-top: 10px;
  z-index: -1;
  filter: blur(15px);
  opacity: 0.8;
  z-index: 10;
  transition: all 0.35s;
`;
export const Wrapper = styled.div<IButtonComponents>`
  position: relative;
  &:hover {
    ${ButtonShadow} {
      filter: blur(10px);
      margin-top: 5px;
    }
  }
  ${ButtonComponents}, ${ButtonShadow} {
    width: ${props => isString(props.width) ? props.width : `${props.width}px` };
    height: ${props => `${props.height}px`};
    font-size: 16px;
    text-align: center;
    color: ${TEXT_COLOR};
    font-weight: bold;
    border-radius: 25px;
    background: linear-gradient(-45deg, ${GRADIENT_PRIMARY_COLOR}, ${GRADIENT_SECONDARY_COLOR});
    background-size: 100%; 
  }
`;
