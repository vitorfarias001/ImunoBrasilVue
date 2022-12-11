import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Atendimentos: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g id="icon_dashboard" transform="translate(1 1)">
        <g id="Icons_scales" data-name="Icons/ scales">
          <g id="Icons_scales-2" data-name="Icons/ scales">
            <circle
              id="Oval"
              cx="4.5"
              cy="4.5"
              r="4.5"
              transform="translate(4)"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              id="Path"
              d="M12.75,0h2.833A1.444,1.444,0,0,1,17,1.462V13.154a1.444,1.444,0,0,1-1.417,1.462H1.417A1.444,1.444,0,0,1,0,13.154V1.462A1.444,1.444,0,0,1,1.417,0H4.25"
              transform="translate(0 4.385)"
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
              d="M.5,10.231V0"
              transform="translate(8 8.769)"
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
              d="M1.2,2.046a.67.67,0,0,1-.992,0,.722.722,0,0,1,0-1.023A12.591,12.591,0,0,1,2.2,0,13.323,13.323,0,0,1,1.2,2.046Z"
              transform="translate(7.792 2.85)"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </g>
        </g>
      </g>
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Atendimentos
