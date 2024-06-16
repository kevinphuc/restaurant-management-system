import { useLocation } from 'react-router-dom';
import Menu from './menu.js'
import MenuCustomer from './customer/menu_customer.js'


const Base = () => {
    const { state } = useLocation()
    const role = state

    return (
        <div>
            {role.find(role => role.name === "Manager") && <Menu />}
            {role.find(role => role.name === "Customer") && <MenuCustomer />}
        </div>
    )
}

export default Base