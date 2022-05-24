import { Card } from "antd"
import { FC } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { devicesType } from "../Types/ProductsSliceType"


const { Meta } = Card

interface packCardType {
    props?: Array<devicesType>
}

export const PackCard: FC<packCardType> = ({ props }) => {

    const defaultProps = useAppSelector(state => state.products.devices)

    if (!props) {
        props = defaultProps
    }

    return <>
        {props.map(({ id, name, price, img }) => {

            return <Link
                to={name}
                key={id}>
                <Card
                    hoverable
                    key={id}
                    style={{ width: 240 }}
                    cover={<img alt={name} src={img} />}
                >
                    <span>Price:{price}</span>
                    <Meta title={name} />
                </Card></Link>
        })
        }
    </>
}
