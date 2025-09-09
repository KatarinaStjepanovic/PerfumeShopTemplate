import React from 'react'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function PreviousPage() {
    const navigate = useNavigate();

  return (
     <div className="arrowBack">
          <FontAwesomeIcon icon={faArrowLeft} className="backIcon" onClick={() => {navigate(-1)}} />
      </div>
  )
}

export default PreviousPage