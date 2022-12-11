import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Recorrencia: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g
        id="Icons_syringe"
        data-name="Icons/ syringe"
        transform="translate(1.414 1.414)"
      >
        <g id="Icons_syringe-2" data-name="Icons/ syringe">
          <path
            id="Path"
            d="M0,0,1.65,1.65"
            transform="translate(0 12.1)"
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
            d="M0,0,5.5,5.5"
            transform="translate(1.1 7.15)"
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
            d="M0,2.75,2.75,0"
            transform="translate(1.1 9.9)"
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
            d="M0,5.5,5.5,0,7.7,2.2,2.2,7.7"
            transform="translate(2.75 3.3)"
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
            d="M0,4.4,4.4,0"
            transform="translate(9.35)"
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

export default Recorrencia
