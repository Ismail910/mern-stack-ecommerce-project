import ScreenHeader from "../../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { Link , useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCreateMutation } from "../../../store/services/categoryService";
import { setSuccess } from "../../../store/reducers/globalReducer";

const CreateCategory = () =>{
  const [state , setState] = useState();
  const [saveCategory, data] = useCreateMutation();
  // console.log(data);

 const errors = data?.error?.data?.errors ?  data?.error?.data?.errors : [];
  const submitCategory = e =>{
    e.preventDefault();
    saveCategory({name: state});
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(data?.isSuccess){
      dispatch(setSuccess(data?.data?.massage));
      navigate('/dashboard/categories');
    }
  },[data?.isSuccess])
    return (
      <Wrapper >
           <ScreenHeader>
            <Link to="/dashboard/categories" className="btn-dark"> <i className="bi bi-arrow-left-short"></i> categories list  </Link>

           </ScreenHeader>
           <form className="w-full md-w-8/12 " onSubmit={submitCategory}>
            <h3 className="text-lg capitalize mb-3 "> create category</h3>
            {errors.length > 0 &&  errors.map((error, key) =>(
              <p className="alert-danger" key={key}>{error.msg}</p>
            ))}
            <div className="md-3">
                 <input type="text" name="" className="bg-gray-900 p-3 rounded-sm outline-none w-full" placeholder="Category Name..." value={state} onChange={(e)=> setState(e.target.value)}/>
            </div>
            <div className="md-3 ">
                <input type="submit"  
                className='bg-indigo-600 text-white capitalize font-medium px-4 py-3 cursor-pointer' value={data.isLoading ?  'loading...': 'create category' }/>
            </div>
           
           </form>
      </Wrapper>
    )
    
}

export default CreateCategory;