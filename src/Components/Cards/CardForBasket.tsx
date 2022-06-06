import { ArrowRightOutlined, MinusOutlined } from "@ant-design/icons";
import { Button, Card, Tooltip } from "antd";
import { Meta } from "antd/lib/list/Item";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { basketMain, basketStateType } from "../../Types/BasketSliceType";
import style from '../Styles/PackCard.module.css'

interface CardBasketType {
    addAmount: (value: basketStateType) => void
    deleteFromBasket: (id:string)=> void
    data: basketMain
}

export const CardBasket: FC<CardBasketType> = ({ addAmount, data,deleteFromBasket }) => {

    const { brand, id, img, name, price, type, amount } = data

    const link = <Link to={name} key={id}><ArrowRightOutlined /></Link>

    const clickHandler = () => deleteFromBasket(id)

    const actions: Array<React.ReactNode> =
        [
            <Tooltip title='Удалить из корзины'>
                <Button
                    type="primary"
                    shape="circle"
                    style={{ border: 'none' }}
                    onClick={clickHandler}
                    icon={<MinusOutlined />} />
            </Tooltip>,link
        ]

    return <Card
        actions={actions}
        className={style.packCard__card}
        key={id}
        cover={<img alt={name} src={img} />}
    >
        <div className={style.card__content}>
            <Meta title={name} />
            <span>Price:{price}</span>
            <span>Кол-во:{amount}</span>
        </div>
    </Card>
}