import { Link } from "react-router-dom";
const Sidebar = ({side , closeSidebar})=>{
    return (
        <div className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-gray-800 z-10 transition-all`}>
            <i className=" bi bi-x-lg absolute top-4 right-4 sm:hidden block cursor-pointer text-lg" onClick={closeSidebar}></i>
           <div className=" bg-white w-15">
            <img src="/logo.svg" alt="logo" />
           </div>
           <ul >
                <li className="px-4 cursor-pointer py-4 text-white flex items-center hover:bg-gray-600 transition-all" >
                <i className="bi bi-card-list mr-2 inline-block text-lg" ></i> <Link to="/dashboard/products" className="text-base capitalize ">products</Link>
                </li>

                <li className="px-4 cursor-pointer py-4 text-white flex items-center hover:bg-gray-600 transition-all" >
                <i className="bi bi-bag-check mr-2 inline-block text-lg" ></i> <Link to="/dashboard/Products" className="text-base capitalize ">Orders</Link>
                </li>

                <li className="px-4 cursor-pointer py-4 text-white flex items-center hover:bg-gray-600 transition-all" >
                <i className="bi bi-people-fill mr-2 inline-block text-lg" ></i> <Link to="/dashboard/Products" className="text-base capitalize ">Customers</Link>
                </li>

                <li className="px-4 cursor-pointer py-4 text-white flex items-center hover:bg-gray-600 transition-all" >
                <i className="bi bi-bar-chart mr-2 inline-block text-lg" ></i> <Link to="/dashboard/categories" className="text-base capitalize ">Categories</Link>
                </li>


           </ul>
        </div>
    )
}

export default Sidebar;