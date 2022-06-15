import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button/Button";

export const Goback = () => {

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return <Button inlineStyle={{ position: 'absolute', top: '95%', right: '95%' }} 
     onClick={goBack} icon={<ArrowLeftOutlined />} />
}