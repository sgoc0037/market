import { ArrowLeftOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Spin } from 'antd'
import React, { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { addToBasket } from '../Reducers/BasketSlice'
import { getDevice } from '../util/util'

export const Shop = () => {

    const navigate = useNavigate()

    const location = useLocation().pathname.split('/') //<=== [0: "",1: 'basket' or 'products',2: "here name for device"]
    const name = location[2]
    const typePage = location[1]

    const goBack = () => navigate(-1)

    const devices = useAppSelector(state => state.products.devices)
    const basket = useAppSelector(state => state.basket.basket)

    const dispatch = useDispatch()

    const data = (typePage === 'products')
        ? getDevice(devices, name) : getDevice(basket, name)

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        data &&
            dispatch(addToBasket(data))
    }

    return <>
        {data &&
            <>
                <Button onClick={goBack} icon={<ArrowLeftOutlined />} />
                <img style={{ width: 256 }} src={data.img} alt={name} />
                <h2>{name}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <span>Цена:{data.price}</span>
                    {typePage === 'products' &&
                        <Button
                            onClick={clickHandler}
                            type='primary'
                            icon={<PlusCircleOutlined />}>Добавить в корзину</Button>
                    }
                    {typePage === 'basket' &&
                        <span>{data.amount}</span>
                    }
                </div>
                <ul>Характеристики:
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit deserunt veniam perferendis quis eos incidunt quas?
                        Quia modi laborum, ex, unde tempore delectus ullam optio vitae natus,
                        consequuntur voluptatum est?</li>
                </ul>
            </>
        }
        {!data &&
            <Spin />
        }
    </>
}
