import React from 'react';

const Readed = ({ readed }) => {
  return (
    <div>
      {readed.map((book) => {
        return (
          <div className="row d-flex">
            <div className="col-4">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Readed;
