import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'

export const Brands = () => {

    const brands = useAppSelector(state => state.products.brands)

    const [value, setValue] = useState<string>(String(brands[0].id))

    const items: MenuProps['items'] = brands.map(({ name, id }) => {
        return {label:name,key:id}
    })


    const menuHandler: MenuProps['onClick'] = (e) => {
        setValue(e.key)
    }

    return <>

        <Menu
            items={items}
            onClick={menuHandler}
            defaultSelectedKeys={['1']}
            selectedKeys={[value]}
        />
    </>
}