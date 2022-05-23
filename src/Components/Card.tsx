import { Card } from "antd"
import { FC } from "react"
import { devicesType } from "../Types/ProductsSliceType"


const { Meta } = Card

interface reCardType {
    props: Array<devicesType>
}

export const reCard: FC<reCardType> = ({ props }) => {

    return <>
        {props.map(({ id, name, price, img }) => {

            return <Card
                hoverable
                key={id}
                style={{ width: 240 }}
                cover={<img alt={name} src={img} />}
            >
                <span>Price:{price}</span>
                <Meta title={name} />
            </Card>
        })
        }
    </>
}
