import { Checkbox, Form, Menu, MenuProps, Modal } from "antd";
import React, { FC, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { getItem, getOptions } from "../../util/util";

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

    const brands = useAppSelector(state => state.products.brands).slice(1)
    const types = useAppSelector(state => state.products.productsType).slice(1)

    const optionBrands = getOptions(brands)
    const optionTypes = getOptions(types)

    const [value, setValue] = useState<string>('brands')

    const menuHandler: MenuProps['onClick'] = (e) => {
        setValue(e.key)
    }

    const items: MenuProps['items'] = [
        getItem('Категория', 'productsType'),
        getItem('Производитель', 'brands')
    ]

    const [form] = Form.useForm();

    return <Modal
        visible={visible}
        title="Выберите на удаление"
        okText="Подтвердить"
        cancelText="Отмена"
        onOk={() => {
            form
                .validateFields()
                .then(values => {
                    form.resetFields();
                    onCreate(values);
                })
                .catch(info => {
                    console.log('Validate Failed:', info);
                });
        }}
        onCancel={onCancel}>
        <Menu
            onClick={menuHandler}
            selectedKeys={[value]}
            items={items}
            mode="horizontal" />
        <Form form={form}>
            {value === 'brands' &&
                <Form.Item name="brandsGroup">
                    <Checkbox.Group options={optionBrands} />
                </Form.Item>
            }
            {value === 'productsType' &&
                <Form.Item name="typesGroup">
                    <Checkbox.Group options={optionTypes} />
                </Form.Item>
            }
        </Form>
    </Modal>
}