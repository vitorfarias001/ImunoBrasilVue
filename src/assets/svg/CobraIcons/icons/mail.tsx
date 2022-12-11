import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Mail: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 20 20"
    >
      <g
        id="Icon_feather-mail"
        data-name="Icon feather-mail"
        transform="translate(-0.911 -4.5)"
      >
        <path
          id="Caminho_5052"
          data-name="Caminho 5052"
          d="M4.956,6H20.6a1.962,1.962,0,0,1,1.956,1.956V19.69A1.962,1.962,0,0,1,20.6,21.646H4.956A1.962,1.962,0,0,1,3,19.69V7.956A1.962,1.962,0,0,1,4.956,6Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Caminho_5053"
          data-name="Caminho 5053"
          d="M22.558,9l-9.779,6.845L3,9"
          transform="translate(0 -1.044)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Mail
