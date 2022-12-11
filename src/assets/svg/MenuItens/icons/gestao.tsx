import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Gestao: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g
        id="Icons_monitoring"
        data-name="Icons/ monitoring"
        transform="translate(1 1)"
      >
        <g id="Icons_monitoring-2" data-name="Icons/ monitoring">
          <path
            id="Path"
            d="M0,1.385V12.462a1.389,1.389,0,0,0,1.385,1.385H16.615A1.389,1.389,0,0,0,18,12.462V1.385A1.389,1.389,0,0,0,16.615,0H1.385A1.389,1.389,0,0,0,0,1.385Z"
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
            d="M0,.75H9.692"
            transform="translate(4.154 17.25)"
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
            d="M1.246,0A7.367,7.367,0,0,1,0,4.154"
            transform="translate(5.677 13.846)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            id="Path-4"
            data-name="Path"
            d="M1.246,4.154A7.367,7.367,0,0,1,0,0"
            transform="translate(11.077 13.846)"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            id="Path-5"
            data-name="Path"
            d="M0,2.077H3.462L4.846.692,6.231,3.462,7.615,0,9,2.077h3.462"
            transform="translate(2.769 4.846)"
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

export default Gestao
