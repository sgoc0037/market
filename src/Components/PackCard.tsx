import { ArrowRightOutlined, PlusCircleOutlined } from "@ant-design/icons"
import { Button, Card } from "antd"
import React, { FC } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { devicesType } from "../Types/ProductsSliceType"
import style from './Styles/PackCard.module.css'

const { Meta } = Card

interface packCardType {
    props: Array<devicesType>
}

export const PackCard: FC<packCardType> = ({ props }) => {

    const defaultProps = useAppSelector(state => state.products.devices)

    if (props.length === 0) {
        props = defaultProps
    }

    const clickHandler = (e: any) => {
        console.log(e)
    }

    return <div className={style.packCard}>
        {props.map(({ id, name, price, img }) => {

            return <Card
                onClick={clickHandler}
                actions={[
                    <Button icon={<PlusCircleOutlined />} />,
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
