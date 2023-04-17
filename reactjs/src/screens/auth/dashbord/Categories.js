/* eslint-disable react-hooks/exhaustive-deps */
import ScreenHeader from "../../../components/ScreenHeader";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import { clearMessage } from "../../../store/reducers/globalReducer";
const Categories = () =>{
  const {success} = useSelector(state => state.globalReducer );

  const dispatch = useDispatch();
  useEffect( () => {

    return  ()=>{
       dispatch(clearMessage())
    }
  
  }, [])
  useEffect(() => {
    return () => {
      if (success) {
        dispatch(clearMessage());
      }
    };
  }, [success, dispatch]);

  
    return (
      <Wrapper >
           <ScreenHeader>
            <Link to="/dashboard/create-category" className="btn-dark">add categorie <i className="bi bi-plus"></i> </Link>

           </ScreenHeader>
           
           {success &&  <div className=" alert-success" >{success}</div>}
          
           <div>lorem lorem    </div>
      </Wrapper>
    )
    
}

export default Categories;