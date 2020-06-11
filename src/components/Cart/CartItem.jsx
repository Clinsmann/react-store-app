import React from 'react';

export default ({
  item: { id, title, img, price, total, count },
  value: { increment, decrement, removeItem } }
) => {
  return (
    <div className='row my-5 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img style={ { width: '5rem', height: '5rem' } }
          src={ img } alt="product" className='img-fluid' />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>product : </span>{ title }
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>price : </span>{ price }
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span className='btn btn-black mx-1' onClick={ () => decrement(id) }>-</span>
            <span className='btn btn-black mx-1'>{ count }</span>
            <span className='btn btn-black mx-1' onClick={ () => increment(id) }>+</span>
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div onClick={ () => removeItem(id) }><i className="fas fa-trash"></i> delete</div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>Item total : $ { total }</strong>
      </div>
    </div>
  )
};
