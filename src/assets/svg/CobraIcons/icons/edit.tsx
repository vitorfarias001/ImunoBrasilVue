import React from 'react'
import * as S from '@svg/styles'
import { Icon, IIconType } from '@svg/types'

const Edit: Icon = ({ color = 'currentColor', size }: IIconType) => (
  <S.ContainerSvg>
    <S.SvgIcon
      size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 26..6 26.6"
    >
      <g
        id="Icon_feather-edit"
        data-name="Icon feather-edit"
        transform="translate(-2 -1.818)"
      >
        <path
          id="Caminho_5198"
          data-name="Caminho 5198"
          d="M13.535,6H5.341A2.341,2.341,0,0,0,3,8.341V24.729A2.341,2.341,0,0,0,5.341,27.07H21.729a2.341,2.341,0,0,0,2.341-2.341V16.535"
          transform="translate(0 -0.699)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Caminho_5199"
          data-name="Caminho 5199"
          d="M24.291,3.545A2.483,2.483,0,0,1,27.8,7.057l-11.12,11.12L12,19.348l1.171-4.682Z"
          transform="translate(-1.977)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </S.SvgIcon>
  </S.ContainerSvg>
)

export default Edit
