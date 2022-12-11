import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Cids: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g id="healthcare-medical-healthcare" transform="translate(1 1)">
        <g
          id="healthcare-medical-healthcare-2"
          data-name="healthcare-medical-healthcare"
        >
          <path
            id="Path"
            d="M2.615,6.926V1.889a.607.607,0,0,0-.654-.63H1.308A1.288,1.288,0,0,1,0,0H0"
            transform="translate(6.538)"
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
            d="M0,0A4.467,4.467,0,0,0,4.577,4.407h0A4.467,4.467,0,0,0,9.154,0"
            transform="translate(0 6.926)"
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
            d="M2.615,0h0A1.288,1.288,0,0,1,1.308,1.259H.654A.607.607,0,0,0,0,1.889V6.926"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <ellipse
            id="Oval"
            cx="2.5"
            cy="2"
            rx="2.5"
            ry="2"
            transform="translate(12 3)"
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
            d="M.5.5h0"
            transform="translate(13.885 3.907)"
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
            d="M0,4.407v.944a4.851,4.851,0,0,0,4.9,4.722h0a4.851,4.851,0,0,0,4.9-4.722V0"
            transform="translate(4.577 6.926)"
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

export default Cids
