import { useAppSelector } from '../app/hooks';
import { Login } from '../Components/Login';
import { Logout } from '../Components/Logout';

export const Auth = () => {

    const isAuth = useAppSelector(state => state.isAuth.isAuth)

    return (<div>
        {isAuth &&
            <Logout />
        }
        {!isAuth &&
            <Login />
        }
    </div>
    );
};