import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

 type TextProps<T extends ElementType> = {
    as?: T
    variant?:
        | 'blockOrSectionName'
        | 'titlePrimary'
        | 'titleSecondary'
        | 'headerPrimary'
        | 'headerSecondary'
        | 'subheaderPrimary'
        | 'subheaderSecondary'
        | 'typefaceMain'
        | 'buttonS'
        | 'buttonM'
        | 'buttonL'
        | 'titleAnyCads'
        | 'BigLink'
        | 'statisticsMore1M'
        | 'tupefaceMainBold'
        | 'smallText'
        | 'smallLink'
        | 'titleSideMenu'
     |'testTitlePrimary'
        |'testTitlePrimaryNumber'
        |'testTitlePrimaryBold'
    children?: ReactNode
    className?: string
     colorText?:string
}

export function Typography<T extends ElementType = 'p'>(

    props: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>
) {
    const { variant = 'typefaceMain', colorText,className, as: Component = 'p', ...rest } = props

    const classNames = ` ${s[variant]} ${className}`

    return <Component className={classNames} style={{color:colorText}}{...rest} />
}

/* В props будут присутствовать все свойства из TextProps<T>: as, variant, children, className + свойства из ComponentPropsWithoutRef<T>,при этом
  из ComponentPropsWithoutRef<T> удалены свойства 'as', 'variant', 'children' и 'className'.... впрочем свойств 'as', 'variant' внутри ComponentPropsWithoutRef<T> не было */

/*
as: Component = 'p' - это деструктуризация с присваиванием нового имени. Свойство as будет присвоено переменной Component, а если свойство as отсутствует в объекте props, переменной Component будет присвоено значение 'p'*/
