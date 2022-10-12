import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CardSkeleton() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card" style={{ width: '18rem' }}>
            <Skeleton variant="rounded" className="h-52" />
            <Skeleton variant="wave" />
            <Skeleton variant="wave" />
            <Skeleton variant="wave" />
            <Skeleton variant="wave" />
            <Skeleton variant="wave" width={100} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
