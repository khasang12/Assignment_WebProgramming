import axios from "axios";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import parse from 'html-react-parser';
function UNewsDetail() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [news, setNews] = useState() 
    async function getNews() {
        return await axios({
        method: "put",
        url: "http://localhost:8080/api/news/detail",
        data: searchParams.get("id"),
    })
    .then((res) => res.data)
    }
    useEffect(()=>{
        getNews().then((res) => {console.log();setNews(parse(res[0].content))})
    }, [])
    
    return (
        <div className="container">
            

        <div className="row g-5">
            <div className="col-md-9">
                {news}
            </div>
            {/* Right Navbar */}
            <div className="col-md-3">
            <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                    Customize this section to tell your visitors a little bit about
                    your publication, writers, content, or something else entirely.
                    Totally up to you.
                </p>
                </div>

                <div className="p-4">
                <h4 className="fst-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                    <li>
                    <a href="#">March 2021</a>
                    </li>
                    <li>
                    <a href="#">February 2021</a>
                    </li>
                    <li>
                    <a href="#">January 2021</a>
                    </li>
                    <li>
                    <a href="#">December 2020</a>
                    </li>
                    <li>
                    <a href="#">November 2020</a>
                    </li>
                    <li>
                    <a href="#">October 2020</a>
                    </li>
                    <li>
                    <a href="#">September 2020</a>
                    </li>
                    <li>
                    <a href="#">August 2020</a>
                    </li>
                    <li>
                    <a href="#">July 2020</a>
                    </li>
                    <li>
                    <a href="#">June 2020</a>
                    </li>
                    <li>
                    <a href="#">May 2020</a>
                    </li>
                    <li>
                    <a href="#">April 2020</a>
                    </li>
                </ol>
                </div>

                <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                    <li>
                    <a href="#">GitHub</a>
                    </li>
                    <li>
                    <a href="#">Twitter</a>
                    </li>
                    <li>
                    <a href="#">Facebook</a>
                    </li>
                </ol>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default UNewsDetail;
