import { useState , useEffect } from "react";

import { useAuthLoginMutation } from "../../store/services/authService";
import { setAdminToken } from "../../store/reducers/authreducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const  AdminLogin = ()=>{
    const navigate = useNavigate();
    const  [state , setState] = useState({
        email: '',
        password: ''
    })
    const handleInputs = e =>{
        setState({
          ...state, [e.target.name]: e.target.value
        })
        
    }
 
    
    const [login, response] = useAuthLoginMutation();

    console.log('my response', response)
    
    const errors = response?.error?.data?.errors  ?  response?.error?.data?.errors : [];
   
    const adminLoginFun = e =>{
        e.preventDefault();
        login(state);   
         
    }
    const dispatch = useDispatch();

    useEffect(()=>{
       
        if(response.isSuccess){
            localStorage.setItem('admin-token', response?.data?.token);
            dispatch( setAdminToken(response?.data?.token));
            navigate('/dashboard/products');
        }
      }, [dispatch, navigate, response?.data?.token, response.isSuccess]);
    return (
        <div className="bg-black h-screen flex justify-center items-center  ">
            <form className="bg-black2 p-3 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded" onSubmit={adminLoginFun}>
                <h3 className="md-3 text-white capitalize font-bold text-lg ">dashboard login</h3>
                {errors.length > 0 && errors.map((error , key)=>(
                    
                    <div key={key}>
                        <p className="bg-red-100 text-red-700 mb-2 p-3 rounded-sm text-sm font-medium">{error.msg}</p>
                    </div>
                ))}
                
                <div className="mb-4">
                    <input type="email" name="email" placeholder="Enter ypur email..." className="w-full text-white bg-black1  rounded outline-none p-5 "onChange={handleInputs} value={state.email} />
                   
                </div>
                <div className="mb-4">
                    <input type="password" name="password" placeholder="Enter ypur password..." className="w-full bg-black1 p-5 text-white rounded outline-none  " onChange={handleInputs}value={state.password}/>
                </div>

                <div className="mb-4">
                    <input type="submit" value={response.isLoading ? 'loading...': 'sing in'} className="bg-indigo-600 w-full p-4 rounded text-white uppercase font-semibold  cursor-pointer"/>
                </div>
            </form>
        </div>
    )
}

export default AdminLogin;