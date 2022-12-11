import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const OpenNew: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -1 25 25"
    >
      <path
        id="Icon_material-open-in-new"
        data-name="Icon material-open-in-new"
        d="M25.015,25.015H7.064V7.064H16.04V4.5H7.064A2.564,2.564,0,0,0,4.5,7.064V25.015a2.564,2.564,0,0,0,2.564,2.564H25.015a2.572,2.572,0,0,0,2.564-2.564V16.04H25.015ZM18.6,4.5V7.064h4.6l-12.6,12.6,1.808,1.808,12.6-12.6v4.6h2.564V4.5Z"
        transform="translate(-4.5 -4.5)"
        fill={color}
      />
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default OpenNew
