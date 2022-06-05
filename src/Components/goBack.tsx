import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Goback = () => {

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return <Button style={{ position: 'absolute', top: '95%', right: '95%' }} 
    type="primary" onClick={goBack} icon={<ArrowLeftOutlined />} />
}