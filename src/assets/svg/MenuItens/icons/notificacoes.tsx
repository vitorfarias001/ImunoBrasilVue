import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Notificacoes: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        id="Icon_ionic-md-notifications"
        data-name="Icon ionic-md-notifications"
        d="M13.524,22.045a1.868,1.868,0,0,0,1.859-1.867H11.665A1.868,1.868,0,0,0,13.524,22.045Zm6.04-5.6V11.31a6.051,6.051,0,0,0-4.646-5.881V4.775a1.394,1.394,0,1,0-2.788,0v.653A6.05,6.05,0,0,0,7.484,11.31v5.134L5.625,18.311v.933h15.8v-.933Z"
        transform="translate(-5.625 -3.375)"
        fill={color}
      />
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Notificacoes
