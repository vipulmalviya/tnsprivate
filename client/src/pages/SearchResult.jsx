import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from '../utils/api';
import Card from '../components/SearchMovieCard/Card.jsx';
import { Spinner } from 'react-bootstrap';


const SearchResult = ({query}) => {
    const [data, setData] = useState("");
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/search/movie?query=${query}&page=${pageNum}`).then((res) => {
            setData(res);
            setPageNum((prev) => prev + 1);
            setLoading(false);
        });
    }

    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
            if (data?.results) {
                setData({
                    ...data,
                    results: [...data?.results, ...res.results]
                });
            } else {
                setData(res);
            }
            setPageNum((prev) => prev + 1);
        });
    }

    useEffect(() => {
        fetchInitialData();
    }, [query]);

    return (

            <section>
                <div className="container">
                    {loading && <Spinner animation="border" variant="primary" />}
                    {!loading && (
                        <div>
                            {data?.results && data.results.length > 0 ? (<><div className='pageTitle'>
                                {`Search ${data.total_results > 1 ? "results" : "result"}`} of <span className="hinglight">{query}</span>
                            </div>
                                <InfiniteScroll
                                    className='container cardsitems'
                                    dataLength={data?.results?.length || 0}
                                    next={fetchNextPageData}
                                    hasMore={pageNum <= data?.total_pages}
                                    loader={<Spinner />}
                                >
                                    {data.results.map((elem, index) => {
                                        if (elem.media_type === "person") return null;
                                        return (
                                            <Card
                                                value={index}
                                                key={elem.id}
                                                data={elem}
                                                Title={elem.title || elem.name}
                                                catagory={elem.Genre}
                                                watch={elem.popularity}
                                                btn={true} />
                                        );
                                    })}
                                </InfiniteScroll></>
                            ) : (
                                <span className="resultNotFound">Sorry, results not found!</span>
                            )}
                        </div>
                    )}
                </div>
            </section>

    );
}

export default SearchResult;
