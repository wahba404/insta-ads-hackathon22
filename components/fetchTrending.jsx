import React, { useState, useEffect } from 'react';

const algoliarecommend = require('@algolia/recommend');
const client = algoliarecommend('U9UXVSI686', 'cbc7cd442bf8785de1a6620085bdcffd');
const indexName = 'prod_ECOM';

export function fetchTrending () {
    const [hits, setHits] = useState([]);
    
    useEffect(() => {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "requests": [
                    { "indexName": "prod_ECOM",
                     "model": "trending-items",
                     "threshold": 0,
                     "maxRecommendations": 10 
                    }
                ]
              })
        };
        const response = fetch('https://u9uxvsi686-dsn.algolia.net/1/indexes/*/recommendations', requestOptions);
        const data = response.json();
        setHits(data);
    }, [])
}
