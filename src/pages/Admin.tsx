import { Button } from 'antd'
import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { FormForAdmin } from '../Components/FormForAdmin'

export const Admin = () => {

    const dispatch = useAppDispatch()

    const [visible, setVisible] = useState(false);

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
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