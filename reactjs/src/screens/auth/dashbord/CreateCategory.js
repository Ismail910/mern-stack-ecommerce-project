import ScreenHeader from "../../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
const CreateCategory = () =>{
    return (
      <Wrapper >
           <ScreenHeader>
            <Link to="/dashboard/categories" className="btn-dark"> <i class="bi bi-arrow-left-short"></i> categories list  </Link>

           </ScreenHeader>
           <form className="w-full md-w-8/12 ">
            <h3 className="text-lg capitalize mb-3 "> create category</h3>
            <div className="md-3">
                 <input type="text" name="" className="bg-gray-900 p-3 rounded-sm outline-none w-full" placeholder="Category Name..." />
            </div>
            <div className="md-3 ">
                <input type="submit"  
                class='bg-indigo-600 text-white capitalize font-medium px-4 py-3' value="create category"/>
            </div>
           
           </form>
      </Wrapper>
    )
    
}

export default CreateCategory;