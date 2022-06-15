import React, { FC } from "react";
import style from './Button.module.scss'

interface buttonType {
    icon?: React.ReactNode
    children?: React.ReactNode
    onClick: (e: any) => void
    border?: 'circle'
    inlineStyle?: React.CSSProperties
}

export const Button: FC<buttonType> = ({ icon, children, onClick, border,inlineStyle={} }) => {

    if(border) {
        inlineStyle.borderRadius = '50%'
    }

    const clickHandler = (e: React.MouseEvent) => onClick(e)

    return <button
        className={style.btn}
        style={inlineStyle}
        onClick={clickHandler}
    >
        {icon}
        {children}
    </button>
}