import { Card, Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

const { Meta } = Card

export const Products = () => {

    const devices = useAppSelector(state => state.products.devices)
    const [oneType, secondType] = useAppSelector(state => state.products.productsType)

    const [menuType, setMenuType] = useState<number>(oneType.id)

    const menuHandler: MenuProps['onClick'] = (e) => {
        setMenuType(+e.key)
    }



    const items: MenuProps['items'] = [
        {
            label: oneType.name,
            key: oneType.id
        },
        {
            label: secondType.name,
            key: secondType.id
        },
    ]


    return <>

        <Menu
            mode='horizontal'
            items={items}
            onClick={menuHandler}
            selectedKeys={['1']} />

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