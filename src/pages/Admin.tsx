import { Button } from 'antd'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { FormForAdmin } from '../Components/FormForAdmin'
import { setBrands, setDevices, setProductsType } from '../Reducers/ProductsSlice'
import { formData, modeForm } from '../Types/FormType'

export const Admin = () => {

    const dispatch = useAppDispatch()

    const [visible, setVisible] = useState(false);

    const onCreate = (data: formData) => {
        data.id = +nanoid()
        switch (data.modeForm) {
            case modeForm.NEWCATEGORY:
                dispatch(setProductsType(data))
                break;
            case modeForm.NEWBRAND:
                dispatch(setBrands(data))
                break;
            case modeForm.NEWPRODUCT:
                dispatch(setDevices(data))
        }
        setVisible(false);
    };

    return <div>
        <div>
            <Button
                type="primary"
                style={{ background: 'deepskyblue' }}
                onClick={() => {
                    setVisible(true);
                }}
            >
                Редактирование
            </Button>
            <FormForAdmin
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
        <Button style={{ background: 'crimson' }} type='primary'>Удаление</Button>
    </div>
}