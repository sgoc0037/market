import { Card } from "antd"
import { FC } from "react"
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

    return <div className={style.packCard}>
        {props.map(({ id, name, price, img }) => {

            return <Link className={style.packCard__card}
                to={name}
                key={id}>
                <Card
                    hoverable
                    key={id}
                    cover={<img alt={name} src={img} />}
                >
                    <span>Price:{price}</span>
                    <Meta title={name} />
                </Card>
            </Link>
        })
        }
    </div>
}
