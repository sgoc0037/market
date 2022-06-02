import { ArrowRightOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { Button, Card } from "antd"
import Meta from "antd/lib/card/Meta"
import React, { FC } from "react"
import { Link } from "react-router-dom"
import { basketMain, basketStateType } from "../Types/BasketSliceType"
import { devicesType } from "../Types/ProductsSliceType"
import style from './Styles/PackCard.module.css'

interface deviceCardType {
    removeProduct?: (value: string) => void
    addAmount?: (value: basketStateType) => void
    setValue: (value: devicesType) => void
    data: devicesType | basketMain
}

export const DeviceCard: FC<deviceCardType> = ({ addAmount, removeProduct, setValue, data }) => {

    const { brand, id, img, name, price, type, amount } = data

    const link = <Link to={name} key={id}><ArrowRightOutlined /></Link>

    const clickHandler = () => {
        setValue({ brand, id, img, name, price, type })
        addAmount &&
            addAmount({ id, amount: 3 })
        removeProduct &&
            removeProduct(id)
    }

    const actions: Array<React.ReactNode> = (!amount)
        ? [<Button
            onClick={clickHandler}
            icon={<PlusCircleOutlined />} />,
            link]
        : [link];

    return <Card
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