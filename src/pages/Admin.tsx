import { Button } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { AddFormForAdmin } from '../Components/AddFormForAdmin'
import { AdminEdit } from '../Components/AdminEdit'
import { setBrands, setDevices, setProductsType } from '../Reducers/ProductsSlice'
import { formData, modeForm } from '../Types/FormType'
import { path } from '../Types/RoutesType'

export const Admin = () => {

    const dispatch = useAppDispatch()

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState<boolean>(false);

    const onCreate = (data: formData) => {
        switch (data.modeForm) {
            case modeForm.NEWCATEGORY:
                dispatch(setProductsType(data))
                break;
            case modeForm.NEWBRAND:
                dispatch(setBrands(data))
                break;
            case modeForm.NEWPRODUCT:
                if (data.newProduct)
                    dispatch(setDevices(data.newProduct))
                break;
            default:
                alert('Ошибка')
        }
        setVisible(false);
    };

    const onCreate2 = (data: any) => {
        console.log(data)
    }

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
            <Button
                style={{ background: 'crimson' }}
                type='primary'><Link to={`../${path.DELETE}`}>Удаление товара</Link></Button>
            <AddFormForAdmin
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
        <div>
            <Button
                onClick={() => setVisible2(true)}
                type='primary'
                style={{ background: 'green' }}>
                Редактор категории и производителя</Button>
            <AdminEdit
                visible={visible2}
                onCreate={onCreate}
                onCancel={() => setVisible2(false)}
            />
        </div>
    </div>
}