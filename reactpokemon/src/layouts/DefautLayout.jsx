import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Index'
 
export function DefautLayout() {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}