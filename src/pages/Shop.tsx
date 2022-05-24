import { Button, Divider } from 'antd'
import React, { FC } from 'react'
import { devicesType } from '../Types/ProductsSliceType'

interface shopType {
    props: devicesType
}

export const Shop: FC<shopType> = ({ props }) => {
    return <>
        <img src={props.img} alt={props.name} />
        <h2>{props.name}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Divider>Цена:{props.price}</Divider>
            <Button type='primary'>Добавить в корзину</Button>
        </div>
        <ul>Характеристики:
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit deserunt veniam perferendis quis eos incidunt quas?
                Quia modi laborum, ex, unde tempore delectus ullam optio vitae natus,
                consequuntur voluptatum est?</li>
        </ul>
    </>
}
