import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Rightsidenav from "../shared/Rightsidenav/Rightsidenav";
import Navbar from "../shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-2xl font-medium">Dragon News</h2>
                    <p>{id}</p>
                </div>
                <Rightsidenav></Rightsidenav>
            </div>
        </div>
    );
};

export default News;