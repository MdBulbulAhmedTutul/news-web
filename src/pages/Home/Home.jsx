import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import Leftsidenav from "../shared/Leftsidenav/Leftsidenav";
import Navbar from "../shared/Navbar/Navbar";
import Rightsidenav from "../shared/Rightsidenav/Rightsidenav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-2xl font-semibold mb-6">Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div className="border">
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default Home;