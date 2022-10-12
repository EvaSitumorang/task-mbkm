import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SkeletonTheme } from 'react-loading-skeleton';
import CardSkeleton from './NewsSkeleton';

function FetchNews() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=ddc8ee2bd46343efa74f17142f42001a').then((response) => {
      console.log(response);
      setNews(response.data.articles);
      setIsLoading(false);
    });
  });

  return (
    <div className="flex flex-row justify-center">
      <SkeletonTheme>
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <div className="container">
            <div className="row">
              {news.map((value) => {
                return (
                  <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                      <img src={value.urlToImage} className="card-img-top" alt="..." />
                      <div classname="card-body">
                        <h5 classname="card-title">{value.title}</h5>
                        <p classname="card-text">{value.description}</p>
                        <a href="#" classname="btn btn-primary">
                          Halaman
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </SkeletonTheme>
    </div>
  );
}

export default FetchNews;
