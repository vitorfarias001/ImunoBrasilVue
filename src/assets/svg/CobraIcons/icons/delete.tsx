import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Delete: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 0 18.8 19.8"
    >
      <path
        id="Icon_material-delete"
        data-name="Icon material-delete"
        d="M8.509,20.648a2.024,2.024,0,0,0,2.018,2.018H18.6a2.024,2.024,0,0,0,2.018-2.018V8.537H8.509ZM21.629,5.509H18.1L17.088,4.5H12.042L11.032,5.509H7.5V7.528H21.629Z"
        transform="translate(-7 -4)"
        fill="none"
        stroke={color}
        strokeWidth="1"
      />
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Delete
