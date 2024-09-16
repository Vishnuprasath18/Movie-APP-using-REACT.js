import React, { useState, useEffect } from "react";
import Card from "./Card";
let base_url = "https://api.themoviedb.org/3";
let API_key = "USE YOUR API KEY HERE;
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];

const Main = () => {
    const [movieData, setData] = useState([]);
    const [url_set, setUrl] = useState(base_url + "/movie/popular" + API_key);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch(url_set)
            .then((res) => res.json())
            .then((data) => {
                setData(data.results);
            })
            .catch((error) => console.log("Error fetching data:", error));
    }, [url_set]);
    const getData = (movieType) => {
        let url;
        switch (movieType) {
            case "Popular":
                url = base_url + "/movie/popular" + API_key;
                break;
            case "Theatre":
                url = base_url + "/movie/now_playing" + API_key;
                break;
            case "Kids":
                url = base_url + "/discover/movie" + API_key + "&certification_country=US&certification.lte=G";
                break;
            case "Drama":
                url = base_url + "/discover/movie" + API_key + "&with_genres=18";
                break;
            case "Comedie":
                url = base_url + "/discover/movie" + API_key + "&with_genres=35";
                break;
            default:
                url = base_url + "/movie/popular" + API_key;
        }
        setUrl(url);
    };
    const searchMovie = (evt) => {
        if (evt.key === "Enter") {
            let url = base_url + "/search/movie" + API_key + "&query=" + search;
            setUrl(url);
            setSearch("");
        }
    };

    return (
        <>
            <div className="header">
                <nav>
                    <ul>
                        {arr.map((value, pos) => (
                            <li key={pos}>
                                <a href="#" name={value} onClick={(e) => getData(e.target.name)}>
                                    {value}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <form>
                    <div className="search-btn">
                        <input
                            type="text"
                            placeholder="Enter Movie Name"
                            className="inputText"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            onKeyDown={searchMovie}
                        />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="container">
                {movieData.length === 0 ? (
                    <p className="notfound">Not Found</p>
                ) : (
                    movieData.map((res, pos) => <Card info={res} key={pos} />)
                )}
            </div>
        </>
    );
};

export default Main;
