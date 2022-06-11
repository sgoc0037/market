import { Button } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { AddFormForAdmin } from './AddFormForAdmin'
import { AdminEdit } from './AdminEdit'
import { addBrands, addProductsType, setBrands, setDevices, setProductsType } from '../../Reducers/ProductsSlice'
import { editData, formData, modeForm } from '../../Types/FormType'
import { path } from '../../Types/RoutesType'
import { getNewArray } from '../../util/util'
import style from './Admin.module.css'

export const Admin = () => {

    const types = useAppSelector(state => state.products.productsType)
    const brands = useAppSelector(state => state.products.brands)

    const dispatch = useAppDispatch()

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState<boolean>(false);

    const onCreate = (data: formData) => {
        switch (data.modeForm) {
            case modeForm.NEWCATEGORY:
                dispatch(addProductsType(data))
                break;
            case modeForm.NEWBRAND:
                dispatch(addBrands(data))
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

    const onCreate2 = (data: editData) => {
        const name = Object.keys(data)[0]
        if (name === 'brandsGroup') {
            const preparation = getNewArray(brands, data[name])
            dispatch(setBrands(preparation))
        } else {
            const preparation = getNewArray(types, data[name])
            dispatch(setProductsType(preparation))
        }
    }

    return <div className={style.admin}>
        <Button
            className={style.admin__add}
            type="primary"
            onClick={() => {
                setVisible(true);
            }}
        >
            Редактирование
        </Button>
        <Button
            className={style.admin__delete}
            type='primary'><Link to={`../${path.DELETE}`}>Удаление товара</Link>
        </Button>
        <Button
            className={style.admin__change}
            onClick={() => setVisible2(true)}
            type='primary'>
            Редактор категории и производителя
        </Button>
        <AddFormForAdmin
            visible={visible}
            onCreate={onCreate}
            onCancel={() => setVisible(false)}
        />
        <AdminEdit
            visible={visible2}
            onCreate={onCreate2}
            onCancel={() => setVisible2(false)}
        />
    </div>
}