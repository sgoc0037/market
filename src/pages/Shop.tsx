import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, Pagination, Spin } from 'antd'
import React, { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { addToBasket } from '../Reducers/BasketSlice'
import { devicesType } from '../Types/ProductsSliceType'

export const Shop = () => {

    const { name } = useParams()

    const devices = useAppSelector(state => state.products.devices)
    const dispatch = useDispatch()

    const props = devices.find((item: devicesType) => {
        if (name === item.name) {
            return item
        }
    })

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props &&
            dispatch(addToBasket(props))
    }

    return <>
        {props &&
            <>
                <img style={{ width: 256 }} src={props.img} alt={name} />
                <h2>{name}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <span>Цена:{props.price}</span>
                    <Button
                    onClick={clickHandler} 
                    type='primary' 
                    icon={<PlusCircleOutlined />}>Добавить в корзину</Button>
                </div>
                <ul>Характеристики:
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit deserunt veniam perferendis quis eos incidunt quas?
                        Quia modi laborum, ex, unde tempore delectus ullam optio vitae natus,
                        consequuntur voluptatum est?</li>
                </ul>
            </>
        }
        {!props &&
            <Spin />
        }
    </>
}
