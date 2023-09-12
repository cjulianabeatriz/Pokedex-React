import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Index'
import { Footer } from '../components/Footer/index'
 
export function DefautLayout() {
    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}