import { Card } from 'antd'
import React from 'react'
import { useAppSelector } from '../app/hooks'

const { Meta } = Card

export const Products = () => {

    const devices = useAppSelector(state => state.products.devices)

    return <>
        {devices.map(({ id, name, price, img }) => {
            
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