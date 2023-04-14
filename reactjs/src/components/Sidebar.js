import { Link } from "react-router-dom";
const Sidebar = ()=>{
    return (
        <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800">
           <div className=" bg-white w-15">
            <img src="/logo.svg" alt="logo" />
           </div>
           <ul >
                <li className="px-4 cursor-pointer py-4 text-white flex items-center hover:bg-gray-600 transition-all" >
                <i class="bi bi-card-list mr-2 inline-block text-lg" ></i> <Link to="dashboard/Products" className="text-base capitalize ">products</Link>
                </li>

                <li className="px-4 cursor-pointer py-4 text-white flex items-center hover:bg-gray-600 transition-all" >
                <i class="bi bi-bag-check mr-2 inline-block text-lg" ></i> <Link to="dashboard/Products" className="text-base capitalize ">Orders</Link>
                </li>

                <li className="px-4 cursor-pointer py-4 text-white flex items-center hover:bg-gray-600 transition-all" >
                <i class="bi bi-people-fill mr-2 inline-block text-lg" ></i> <Link to="dashboard/Products" className="text-base capitalize ">Customers</Link>
                </li>

                
           </ul>
        </div>
    )
}

export default Sidebar;