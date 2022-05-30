import { Form, Input, InputNumber, Modal, Radio, RadioChangeEvent } from "antd";
import { nanoid } from "nanoid";
import { useState } from "react";
import { formData, modeForm, } from "../Types/FormType";

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: formData) => void;
    onCancel: () => void;
}

export const FormForAdmin: React.FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel,
}) => {

    const optionModeForm = [
        {
            label: 'Новая категория товара',
            value: modeForm.NEWCATEGORY
        },
        {
            label: 'Новый бренд',
            value: modeForm.NEWBRAND
        },
        {
            label: 'Новый товар',
            value: modeForm.NEWPRODUCT
        }
    ]

    const [form] = Form.useForm();

    const [currentRadioValue, setCurrentRadioValue] = useState<modeForm>(modeForm.NEWCATEGORY)

    const radioHandler = (e: RadioChangeEvent) => {
        setCurrentRadioValue(e.target.value)
    }

    return (
        <Modal
            visible={visible}
            title="Редактирование"
            okText="Добавить"
            cancelText="Отмена"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        let id = nanoid()
                        const data: formData = {
                            id,
                            name: values.name,
                            modeForm: values.modeForm,
                            newProduct: {
                                brand: values.brand,
                                price: values.price,
                                type: values.type,
                                id,
                                name: values.name,
                                img: ''
                            }
                        }
                        form.resetFields();
                        onCreate(data);
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modeForm: currentRadioValue }}
            >
                <Form.Item name="modeForm">
                    <Radio.Group
                        options={optionModeForm}
                        value={currentRadioValue}
                        onChange={radioHandler} />
                </Form.Item>
                {currentRadioValue === modeForm.NEWCATEGORY &&
                    <>
                        <Form.Item
                            name='name'
                            label="Категория"
                            rules={[{ required: true, message: 'Обязательное поле' }]}
                        >
                            <Input />
                        </Form.Item>
                    </>
                }
                {currentRadioValue === modeForm.NEWBRAND &&
                    <>
                        <Form.Item
                            name='name'
                            label="Бренд"
                            rules={[{ required: true, message: 'Обязательное поле' }]}
                        >
                            <Input />
                        </Form.Item>
                    </>
                }
                {currentRadioValue === modeForm.NEWPRODUCT &&
                    <>
                        <Form.Item
                            name='name'
                            label="Модель устройства"
                            rules={[{ required: true, message: 'Обязательное поле' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='brand'
                            label="Бренд"
                            rules={[{ required: true, message: 'Укажите производителя' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name='type'
                            label="Категория продукта"
                            rules={[{ required: true, message: 'Обязательное поле' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="description" label="Описание">
                            <Input type="textarea" />
                        </Form.Item>
                        <Form.Item name="price" label='Цена'>
                            <InputNumber type='number' min={1} max={10} />
                        </Form.Item>
                    </>
                }
            </Form>
        </Modal>
    );
};
