import styled, { css } from 'styled-components'
import { IIconType } from './types'

type ContainerIconTypes = Pick<IIconType, 'size'>

const wrapperModifiers = ({ size }: ContainerIconTypes) => {
  if (size === 'xSmall') {
    return css`
      width: 14px;
      height: 14px;
    `
  }
  if (size === 'small') {
    return css`
      width: 24px;
      height: 24px;
    `
  }

  if (size === 'medium') {
    return css`
      width: 32px;
      height: 32px;
    `
  }

  if (size === 'large') {
    return css`
      width: 64px;
      height: 64px;
    `
  }

  if (size !== 'small' && size !== 'medium' && size !== 'large') {
    return css`
      width: ${size};
      height: ${size};
    `
  }
}

export const ContainerSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SvgIcon = styled.svg<ContainerIconTypes>`
  ${({ size }) => css`
    width: 100%;
    height: auto;
    ${size && wrapperModifiers({ size })}
  `}
`
