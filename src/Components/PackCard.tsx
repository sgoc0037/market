import { ArrowRightOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { Button, Card } from "antd"
import React, { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { addToBasket } from "../Reducers/BasketSlice"
import { basketMain, basketStateType, changeAmountType } from "../Types/BasketSliceType"
import { devicesType } from "../Types/ProductsSliceType"
import style from './Styles/PackCard.module.css'

const { Meta } = Card

interface packCardType {
    props: Array<devicesType> | Array<basketMain>
    removeProduct?: (value: devicesType) => void
    addAmount?: (value:basketStateType) => void
}

export const PackCard: FC<packCardType> = ({ props, removeProduct, addAmount }) => {

    const [value, setValue] = useState<devicesType>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        value &&
            dispatch(addToBasket(value))
    }, [value])

    return <div className={style.packCard}>
        {props.map(({ brand, id, img, name, price, type, amount }) => {

            const link = <Link to={name} key={id}><ArrowRightOutlined /></Link>

            const clickHandler = () => {
                addAmount &&
                    addAmount({ id, amount: 3 })
                // removeProduct &&
                //     removeProduct({ brand, id, img, name, price, type })
            }

            const actions: Array<React.ReactNode> = (!amount)
                ? [<Button
                    onClick={() => setValue({ brand, id, img, name, price, type })}
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
        })
        }
    </div>
}
