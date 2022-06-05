import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { removeDevice } from "../Reducers/ProductsSlice";
import { getIndex } from "../util/util";
import { PackCard } from "./Cards/PackCard";
import { Goback } from "./goBack";

export const DeleteFormForAdmin = () => {

    const devices = useAppSelector(state => state.products.devices)
    const dispatch = useDispatch()

    const [value, setValue] = useState<string>()

    useEffect(() => {
        if (value) {
            const index = getIndex(devices, value)
            dispatch(removeDevice({ id: value, index }))
        }
    }, [value])

    return <div>
        <PackCard removeProduct={setValue} data={devices} />
    </div>
}