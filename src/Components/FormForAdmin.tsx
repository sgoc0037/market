import { Form, Input, InputNumber, Modal, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { formData, modeForm,  } from "../Types/FormType";

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: formData) => void;
    onCancel: () => void;
}

export const FormForAdmin: React.FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel
}) => {


    const [form] = Form.useForm();

    const [currentRadioValue, setCurrentRadioValue] = useState<string>('')

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
                        form.resetFields();
                        onCreate(values);
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
            >
                <Form.Item name="modeForm" className="collection-create-form_last-form-item">
                    <Radio.Group onChange={radioHandler}>
                        <Radio value={modeForm.NEWCATEGORY}>Новая категория товара</Radio>
                        <Radio value={modeForm.NEWBRAND}>Новый бренд</Radio>
                        <Radio value={modeForm.NEWPRODUCT}>Новый товар</Radio>
                    </Radio.Group>
                </Form.Item>
                {currentRadioValue === modeForm.NEWCATEGORY &&
                    <>
                        <Form.Item
                            name={modeForm.NEWCATEGORY}
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
                            name={modeForm.NEWBRAND}
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
                            name={modeForm.NEWPRODUCT}
                            label="Модель устройства"
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
