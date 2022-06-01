import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { removeDevice } from "../Reducers/ProductsSlice";
import { devicesType } from "../Types/ProductsSliceType";
import { PackCard } from "./PackCard";

export const DeleteFormForAdmin = () => {

    const devices = useAppSelector(state => state.products.devices)
    const dispatch = useDispatch()
    const [value, setValue] = useState<devicesType>()

    useEffect(() => {
        value &&
            dispatch(removeDevice(value))
    }, [value])

    return <div>
        <PackCard removeProduct={setValue} props={devices} />
    </div>
}