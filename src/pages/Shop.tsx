import { Button } from 'antd'
import React, { FC, MouseEvent } from 'react'
import { useParams } from 'react-router-dom'
import { devicesType } from '../Types/ProductsSliceType'

interface shopType {
    props: devicesType
}

export const Shop: FC<shopType> = ({ props }) => {

    console.log(useParams())

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }

    return <>
        <img style={{ width: 256 }} src={props.img} alt={props.name} />
        <h2>{props.name}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <span>Цена:{props.price}</span>
            <Button onClick={clickHandler} type='primary'>Добавить в корзину</Button>
        </div>
        <ul>Характеристики:
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit deserunt veniam perferendis quis eos incidunt quas?
                Quia modi laborum, ex, unde tempore delectus ullam optio vitae natus,
                consequuntur voluptatum est?</li>
        </ul>
    </>
}
