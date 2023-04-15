import ScreenHeader from "../../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
const Categories = () =>{
    return (
      <Wrapper >
           <ScreenHeader>
            <Link to="/dashboard/create-category" className="btn-dark">add categorie <i class="bi bi-plus"></i> </Link>

           </ScreenHeader>
      </Wrapper>
    )
    
}

export default Categories;