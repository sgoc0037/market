import { MinusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Spin } from 'antd'
import React, { FC, MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { Amount } from '../../Components/Amount'
import { addToBasket, deleteFromBasket } from '../../Reducers/BasketSlice'
import { getDevice, getIndex, searchHimself } from '../../util/util'

export const Shop = () => {

    const [, typePage, name] = useLocation().pathname.split('/') //<=== [0: "",1: 'basket' or 'products',2: "here name for device"]

    const devices = useAppSelector(state => state.products.devices)
    const basket = useAppSelector(state => state.basket.basket)
    const dispatch = useDispatch()

    const data = (typePage === 'products')
        ? getDevice(devices, name) : getDevice(basket, name);

    const inBasket = searchHimself(basket, data.id)

    const addHandler = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(addToBasket(data))
    }

    const deleteHandler = () => {
        const index = getIndex(basket, data.id)
        dispatch(deleteFromBasket(index))
    }

    return <>
        {data &&
            <>
                <img style={{ width: 256 }} src={data.img} alt={name} />
                <h2>{name}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <span>Цена:{data.price}</span>
                    {typePage === 'products'
                        ? inBasket
                            ? <Button
                                onClick={deleteHandler}
                                style={{ background: 'green' }}
                                type='primary'
                                icon={<MinusOutlined />} >Удалить из корзины</Button>
                            : <Button
                                onClick={addHandler}
                                type='primary'
                                icon={<PlusCircleOutlined />}>Добавить в корзину</Button>
                        : ''
                    }
                    {typePage === 'basket' &&
                        <Amount amount={+data.amount} id={data.id} />
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
