import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Script: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        id="Icon_material-description"
        data-name="Icon material-description"
        d="M14.5,3H7.7A1.7,1.7,0,0,0,6.009,4.7L6,18.3A1.7,1.7,0,0,0,7.691,20H17.9a1.7,1.7,0,0,0,1.7-1.7V8.1Zm1.7,13.6H9.4V14.9h6.8Zm0-3.4H9.4V11.5h6.8ZM13.65,8.95V4.275L18.325,8.95Z"
        transform="translate(-6 -3)"
        fill={color}
      />
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Script
