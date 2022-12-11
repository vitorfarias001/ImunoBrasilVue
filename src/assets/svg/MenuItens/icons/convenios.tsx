import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Convenio: Icon = ({
  color = 'currentColor',
  size = 'small'
}: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 23"
    >
      <g id="Icons_cross" data-name="Icons/ cross" transform="translate(1 1)">
        <g id="Icons_cross-2" data-name="Icons/ cross">
          <path
            id="Path"
            d="M21,6.462H14.538V0H6.462V6.462H0v8.077H6.462V21h8.077V14.538H21Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            id="Path-2"
            data-name="Path"
            d="M.75,0V12.923"
            transform="translate(9.75 4.038)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            id="Path-3"
            data-name="Path"
            d="M0,.75H12.923"
            transform="translate(4.038 9.75)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </g>
      </g>
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Convenio
