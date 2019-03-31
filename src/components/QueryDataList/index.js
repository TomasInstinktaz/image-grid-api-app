import React from 'react';
import './index.css';

// urls is "full, raw, regular, small, thumb"
const QueryDataListItem = ({ queryData }) => (
    <li className="text-center">{queryData}</li>
)

const QueryDataList = (props) => {
   return (
        <ul>
           {props.list.map((queryData, index) => (
               <QueryDataListItem queryData={queryData} key={index}/>
           ))}
         </ul>
   )
}

export default QueryDataList;
