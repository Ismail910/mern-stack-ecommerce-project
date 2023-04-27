import { Link } from "react-router-dom";

const Pagination = ({page, count, perPage, path})=>{
   const totallLinks = Math.ceil(count / perPage);
   let startLoop = page;
   let diff = totallLinks - page;
   if(diff <= 3){
    startLoop = totallLinks -3;
   }
   let endLoop = startLoop + 3;
   if(startLoop <= 0){
    startLoop = 1;
   }
   const links = ()=>{
    const allLinks = [];
    for(let i = startLoop; i <= endLoop; i++){
        allLinks.push(
            <li key={i}>
                <Link className="pagination-linke   text-gray-500  " to={`${path}/${i}`}>{i}</Link>
            </li>
        );
    }
    return allLinks;
   }
   const next= ()=>{
    if(page < totallLinks){
        return <li><Link className=" border border-gray-800 text-gray-500 text-sm font-medium block py-2 px-4 bg-gray-900 " to={`${path}/${page +1}`}><i className="bi bi-chevron-double-right"></i></Link></li>
    }
   }
   const prev = ()=>{
    if(page > 1) {
        return <li><Link className=" border border-gray-800 text-gray-500 text-sm font-medium block py-2 px-4 bg-gray-900" to={`${path}/${page -1}`}><i className="bi bi-chevron-double-left"></i></Link></li>
    }
   }
    return count > 3 &&  (
        <ul className="flex mt-2">
            {prev()}
            {links()}
            {next()}
        </ul>
    ); 
}

export default Pagination;