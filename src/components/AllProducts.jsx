import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";


function AllProducts() {
  return (
     <div className='allProdDiv'>
        <div className='allTitle'>Uncover the Full Fragrance <br/> Experience</div>
        <hr className='allHr'/>
        <div className='filter'>
            < FontAwesomeIcon icon={faCaretDown} style={{color: "var(--main-color)"}}/>
            Filter: none</div>
            <div className='allProdShow'>

            </div>
            < div className='explore'>Explore the Rest < FontAwesomeIcon icon={faForward} className='more'/></div>
     </div>
  )
}

export default AllProducts