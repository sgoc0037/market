import { ArrowLeftOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Spin } from 'antd'
import React, { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { addToBasket } from '../Reducers/BasketSlice'
import { devicesType } from '../Types/ProductsSliceType'

export const Shop = () => {

    const navigate = useNavigate()

    const location = useLocation().pathname.split('/') //<=== [0: "",1: 'basket' or 'products',2: "here name for device"]
    const name = location[2]

    const goBack = () => navigate(-1)

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
                <Button onClick={goBack} icon={<ArrowLeftOutlined />} />
                <img style={{ width: 256 }} src={props.img} alt={name} />
                <h2>{name}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <span>Цена:{props.price}</span>
                    {location[1] === 'products'
                        ? <Button
                            onClick={clickHandler}
                            type='primary'
                            icon={<PlusCircleOutlined />}>Добавить в корзину</Button>
                        : <span>place for amount</span>
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
        {!props &&
            <Spin />
        }
    </>
}
