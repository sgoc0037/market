import { Menu, MenuProps, Modal } from "antd";
import React, { FC, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { getItem } from "../util/util";

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: any) => void;
    onCancel: () => void;
}

export const AdminEdit: FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel
}) => {

    const types = useAppSelector(state=>state.products.productsType).slice(1)
    const brands = useAppSelector(state=>state.products.brands).slice(1)

    const [value, setValue] = useState<string>('brands')

    const menuHandler: MenuProps['onClick'] = (e) => {
        setValue(e.key)
    }

    const items: MenuProps['items'] = [
        getItem('Категория', 'productsType'),
        getItem('Производитель', 'brands')
    ]

    return <Modal
        visible={visible}
        title="Редактирование"
        okText="Добавить"
        cancelText="Отмена"
        onCancel={onCancel}>
        <Menu
            onClick={menuHandler}
            selectedKeys={[value]}
            items={items}
            mode="horizontal" />
            {value === 'brands' &&
                brands.map(item=> {
                    return <span>{item.name}</span>
                })
            }
            {value === 'productsType' &&
                types.map(item=> {
                    return <span>{item.name}</span>
                })
            }
    </Modal>
}