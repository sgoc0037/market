import { Button } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { AddFormForAdmin } from '../Components/AddFormForAdmin'
import { setBrands, setDevices, setProductsType } from '../Reducers/ProductsSlice'
import { formData, modeForm } from '../Types/FormType'
import { path } from '../Types/RoutesType'

export const Admin = () => {

    const dispatch = useAppDispatch()

    const [visible, setVisible] = useState(false);

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
            <AddFormForAdmin
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
        <Button 
        style={{ background: 'crimson' }} 
        type='primary'><Link to={`../${path.DELETE}`}>Удаление</Link></Button>
    </div>
}