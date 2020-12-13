import React from 'react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';

const Paginations = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul
        className="pagination"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        {pages.map((page) => (
          <div
            key={page}
            color="primary"
            className={page === currentPage ? 'page-item active' : 'page-item'}
            style={{
              cursor: 'pointer',
              color: '#253053',
            }}
          >
            {page === currentPage ? (
              <Button
                className="page-link"
                varient="contained"
                onClick={() => onPageChange(page)}
                style={{
                  backgroundColor: '#253053',
                  color: '#FFFFFF',
                  boxShadow:
                    '0px 1px 0px rgba(63, 63, 68, 0.14), 0px 3px 4px rgba(63, 63, 68, 0.12), 0px 1px 5px rgba(63, 63, 68, 0.2)',
                  minWidth: 32,
                  maxHeight: 32,
                  marginLeft: 8,
                  marginRight: 8,
                }}
              >
                <p style={{ marginTop: -2 }}>{page}</p>
              </Button>
            ) : (
              <Button
                className="page-link"
                varient="contained"
                onClick={() => onPageChange(page)}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#253053',
                  boxShadow:
                    '0px 1px 0px rgba(63, 63, 68, 0.14), 0px 3px 4px rgba(63, 63, 68, 0.12), 0px 1px 5px rgba(63, 63, 68, 0.2)',
                  minWidth: 32,
                  maxHeight: 32,
                  marginLeft: 8,
                  marginRight: 8,
                  textAlign: 'justify',
                }}
              >
                <p style={{ marginTop: -2 }}>{page}</p>
              </Button>
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Paginations;
