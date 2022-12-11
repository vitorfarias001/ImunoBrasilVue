import { FC, SVGAttributes } from 'react'
export interface IIconType extends SVGAttributes<SVGElement> {
  color?: string
  size?: 'xSmall' | 'small' | 'medium' | 'large'
}
export interface IDefaultIconProps {
  icon: VariantPriceMetIcons
  size?: string
}
export type Icon = FC<IIconType>
