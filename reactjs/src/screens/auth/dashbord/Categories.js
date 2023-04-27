/* eslint-disable react-hooks/exhaustive-deps */
import ScreenHeader from "../../../components/ScreenHeader";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./Wrapper";
import { Link , useParams} from "react-router-dom";
import { clearMessage } from "../../../store/reducers/globalReducer";
import { useGetQuery }   from "../../../store/services/categoryService";
import Spinner from "../../../components/Spinner";
import Pagination from "../../../components/Pagination";
const Categories = () =>{

  const {success} = useSelector(state => state.globalReducer );
 
  let {page} = useParams();

  if(!page)
  {
    page = 1;
  }
  const {data = [], isLoading, isFetching} = useGetQuery(page);

  const dispatch = useDispatch();
  useEffect( () => {
    return  ()=>{
       dispatch(clearMessage())
    }
  }, [])
   

  
    return (
      <Wrapper >
           <ScreenHeader>
            <Link to="/dashboard/create-category" className="btn-dark">add categorie <i className="bi bi-plus"></i> </Link>

           </ScreenHeader>
           
           {success &&  <div className=" alert-success" >{success}</div>}
          
           {!isFetching ? data?.categories?.categories?.length > 0 && < ><div>
            <table className="w-full bg-gray-900 rounded-md" >
            <thead>
              <tr className="border-b border-gray-800 text-left">
                <th className="p-3 uppercase text-base font-medium text-gray-500 text-sm">name</th>
                <th className="p-3 uppercase text-base font-medium text-gray-500 text-sm">edit</th>
                <th className="p-3 uppercase  text-base font-medium text-gray-500 text-sm">delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.categories?.categories?.map(category => (<tr key={category._id} className="odd:bg-gray-800">
                 <td className="p-3 capitalize text-sm font-normal text-gray-300">{category.name}</td>
                 <td className="p-3 capitalize text-sm font-normal text-gray-300"><button>Edet</button></td>
                 <td className="p-3 capitalize text-sm font-normal text-gray-300"><button>Delete</button></td>
              </tr>))}
            </tbody>
            </table>
           </div> <Pagination page={parseInt( page)} perPage={data?.categories?.perPage} count={data?.categories?.count} path="/dashboard/categories"/> </>: <Spinner />}
      </Wrapper>
    )
    
}

export default Categories;