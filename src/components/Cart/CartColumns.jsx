import React from 'react';

export default () => {
  const columns = ['products', 'name of product', 'price', 'quantity', 'remove', 'total'];
  return (
    <div className='container-fluid text-center d-none d-lg-block'>
      <div className='row'>
        { columns.map(column => (
          <div className="col-10 mx-auto col-lg-2" key={ column }>
            <p className='text-uppercase'>{ column }</p>
          </div>
        )) }
      </div>
    </div>
  )
};
