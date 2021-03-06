import React from 'react';

export default ({ name, title }) => (
  <div className='row container-fluid'>
    <div className="col-10 mx-auto my-2 text-title d-flex justify-content-center">
      <h1 className="text-capitalize font-weight-bold">
        { name } <strong className="text-blue">
          { title }
        </strong>
      </h1>
    </div>
  </div>
)
