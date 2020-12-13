import React from 'react';
import _ from 'lodash';


const Paginations = (props) => {

  const { itemsCount, pageSize, currentPage, onPageChange } = props; 
  const pageCount = Math.ceil(itemsCount / pageSize); 
  if (pageCount === 1) return null; 

  const pages = _.range(1, pageCount + 1); 

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <div 
            key={page} 
            color='primary'
            className={page === currentPage ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" , color: '#253053' }}>
              <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default Paginations;