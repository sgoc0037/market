import { ArrowRightOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Card, Tooltip } from "antd"
import Meta from "antd/lib/card/Meta"
import React, { FC, useState } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { devicesType } from "../../Types/ProductsSliceType"
import { searchHimself } from "../../util/util"
import style from '../Styles/PackCard.module.css'

interface deviceCardType {
    removeProduct?: (value: string) => void
    setValue: (value: devicesType) => void
    data: devicesType
}

type inBasketType = boolean

export const DeviceCard: FC<deviceCardType> = ({ removeProduct, setValue, data }) => {

    const { brand, id, img, name, price, type, amount } = data
    const basket = useAppSelector(state => state.basket.basket)

    const [inBasket, setInBasket] = useState<inBasketType>(searchHimself(basket, id))

    const link = <Link to={name} key={id}><ArrowRightOutlined /></Link>

    const clickHandler = () => {
        removeProduct &&
            removeProduct(id)
    }
    const handlerAddToBasket = () => {
        setValue({ brand, id, img, name, price, type })
        setInBasket(true)
    }

    const actions: Array<React.ReactNode> =
        [
            <Tooltip title='Добавить в корзину'>
                <Button
                    type="primary"
                    shape="circle"
                    style={{ border: 'none' }}
                    onClick={handlerAddToBasket}
                    icon={<PlusOutlined />} />
            </Tooltip>,
            link
        ]

    return <Card
        style={inBasket ? { border: '2px solid #9e9e9e' } : { border: '2px solid #f0f0f0' }}
        onClick={clickHandler}
        actions={actions}
        className={style.packCard__card}
        key={id}
        cover={<img alt={name} src={img} />}
    >
        <div className={style.card__content}>
            <Meta title={name} />
            <span>Price:{price}</span>
            {amount &&
                <span>Кол-во:{amount}</span>
            }
        </div>
    </Card>
}