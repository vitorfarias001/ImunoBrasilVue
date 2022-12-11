import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Copy: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 20 20"
    >
      <g
        id="Icon_feather-copy"
        data-name="Icon feather-copy"
        transform="translate(-2.5 -2.5)"
      >
        <path
          id="Caminho_5218"
          data-name="Caminho 5218"
          d="M15.087,13.5h7.14a1.587,1.587,0,0,1,1.587,1.587v7.14a1.587,1.587,0,0,1-1.587,1.587h-7.14A1.587,1.587,0,0,1,13.5,22.227v-7.14A1.587,1.587,0,0,1,15.087,13.5Z"
          transform="translate(-4.946 -4.946)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          id="Caminho_5219"
          data-name="Caminho 5219"
          d="M5.38,13.314H4.587A1.587,1.587,0,0,1,3,11.727V4.587A1.587,1.587,0,0,1,4.587,3h7.14a1.587,1.587,0,0,1,1.587,1.587V5.38"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Copy
