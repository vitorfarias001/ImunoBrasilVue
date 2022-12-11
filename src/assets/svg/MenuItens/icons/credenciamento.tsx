import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Credenciamento: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g id="Icons_scales" data-name="Icons/ scales" transform="translate(1 1)">
        <g id="Icons_scales-2" data-name="Icons/ scales">
          <circle
            id="Oval"
            cx="4"
            cy="4"
            r="4"
            transform="translate(4)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            id="Path"
            d="M11.25,0h2.5A1.244,1.244,0,0,1,15,1.231v9.846a1.244,1.244,0,0,1-1.25,1.231H1.25A1.244,1.244,0,0,1,0,11.077V1.231A1.244,1.244,0,0,1,1.25,0h2.5"
            transform="translate(0 3.692)"
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
            d="M.75,8.615V0"
            transform="translate(6.75 7.385)"
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
            d="M1.063,1.723a.611.611,0,0,1-.875,0,.589.589,0,0,1,0-.862A11.319,11.319,0,0,1,1.938,0,11,11,0,0,1,1.063,1.723Z"
            transform="translate(6.875 2.4)"
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

export default Credenciamento
