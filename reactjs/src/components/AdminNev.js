import { logout } from "../store/reducers/authreducer";
import {useDispatch} from "react-redux";
const AdminNav =({openSidebar})=>{
    const dispatch = useDispatch();
    const adminLogout = ()=>{
        dispatch(logout());
    }
    return(
        <nav className="fixed left-0 sm:left-64 top-4 right-0 mx-4 ">
            <div className=" bg-gray-800 w-full   p-4 flex justify-between sm:justify-end items-center">
                <i class="bi bi-filter-left text-white text-2xl cursor-pointer sm:hidden block" onClick={openSidebar}></i>
                <button className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize" onClick={adminLogout}>Logout</button>

            </div>
        </nav>
    )
}

export default AdminNav;