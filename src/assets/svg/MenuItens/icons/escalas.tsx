import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Escalas: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g
        id="Icon_feather-calendar"
        data-name="Icon feather-calendar"
        transform="translate(-3.5 -2)"
      >
        <path
          id="Caminho_5173"
          data-name="Caminho 5173"
          d="M6.056,6H16.944A1.556,1.556,0,0,1,18.5,7.556V18.444A1.556,1.556,0,0,1,16.944,20H6.056A1.556,1.556,0,0,1,4.5,18.444V7.556A1.556,1.556,0,0,1,6.056,6Z"
          transform="translate(0 -1.444)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Caminho_5174"
          data-name="Caminho 5174"
          d="M24,3V6.111"
          transform="translate(-9.389)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Caminho_5175"
          data-name="Caminho 5175"
          d="M12,3V6.111"
          transform="translate(-3.611)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Caminho_5176"
          data-name="Caminho 5176"
          d="M4.5,15h14"
          transform="translate(0 -5.778)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Escalas
