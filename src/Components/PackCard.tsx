import { ArrowRightOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { Button, Card } from "antd"
import React, { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { addToBasket } from "../Reducers/BasketSlice"
import { devicesType } from "../Types/ProductsSliceType"
import style from './Styles/PackCard.module.css'

const { Meta } = Card

interface packCardType {
    props: Array<devicesType>
}

export const PackCard: FC<packCardType> = ({ props }) => {

    const [value, setValue] = useState<devicesType>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        value &&
            dispatch(addToBasket(value))
    }, [value])

    return <div className={style.packCard}>
        {props.map(({ id, name, price, img, brand, type }) => {

            return <Card
                actions={[
                    <Button onClick={() => setValue({ brand, id, img, name, price, type })} icon={<PlusCircleOutlined />} />,
                    <Link to={name} key={id}><ArrowRightOutlined /></Link>
                ]}
                className={style.packCard__card}
                hoverable
                key={id}
                cover={<img alt={name} src={img} />}
            >
                <span>Price:{price}</span>
                <Meta title={name} />
            </Card>
        })
        }
    </div>
}
