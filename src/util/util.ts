import { MenuProps } from 'antd';
import { basketMain } from '../Types/BasketSliceType';
import { devicesType } from '../Types/ProductsSliceType';

export const image = 'https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'


type MenuItem = Required<MenuProps>['items'][number];

export function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

export const getIndex = (arr: Array<devicesType | basketMain>, value: string): number =>
    arr.findIndex((item) => item.id === value)

export const getDevice = (arr: Array<devicesType | basketMain>, name: string):devicesType | basketMain => {
    const resolve = arr.find((item) => name === item.name)
    if(resolve === undefined) {
        return arr[0]
    }
    return resolve
}

export const searchHimself = (arr:Array<basketMain>,value:string)=> {
    return arr.some(item=> item.id === value)
}