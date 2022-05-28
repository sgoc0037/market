import React from "react";
import { AppRouter } from "./AppRouter";
import { HeaderMenu } from "./headerMenu";

export const Main = () => {

    return <>
        <HeaderMenu />
        <AppRouter />
    </>
}