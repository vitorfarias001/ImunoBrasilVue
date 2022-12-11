import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Transfer: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -3 26 26"
    >
      <path
        id="Icon_awesome-exchange-alt"
        data-name="Icon awesome-exchange-alt"
        d="M0,9.078V8.343a1.1,1.1,0,0,1,1.1-1.1H17.625v-2.2a1.1,1.1,0,0,1,1.881-.779l3.672,3.672a1.1,1.1,0,0,1,0,1.558l-3.672,3.672a1.1,1.1,0,0,1-1.881-.779v-2.2H1.1A1.1,1.1,0,0,1,0,9.078Zm22.4,6.977H5.875v-2.2a1.1,1.1,0,0,0-1.881-.779L.323,16.744a1.1,1.1,0,0,0,0,1.558l3.672,3.672a1.1,1.1,0,0,0,1.881-.779v-2.2H22.4a1.1,1.1,0,0,0,1.1-1.1v-.734A1.1,1.1,0,0,0,22.4,16.054Z"
        transform="translate(0 -3.936)"
        fill={color}
      />
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Transfer
