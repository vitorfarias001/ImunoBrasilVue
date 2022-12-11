import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Pacientes: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        id="Icon_awesome-user-alt"
        data-name="Icon awesome-user-alt"
        d="M9.244,10.4a5.2,5.2,0,1,0-5.2-5.2A5.2,5.2,0,0,0,9.244,10.4Zm4.622,1.156h-1.99a6.286,6.286,0,0,1-5.265,0H4.622A4.622,4.622,0,0,0,0,16.177v.578a1.734,1.734,0,0,0,1.733,1.733H16.755a1.734,1.734,0,0,0,1.733-1.733v-.578A4.622,4.622,0,0,0,13.866,11.555Z"
        fill={color}
      />
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Pacientes
