import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details, total_view, _id } = news;
    return (
        <div className="px-3">
            <h2 className="text-xl font-medium mb-3">{title}</h2>
            <img className="mb-3" src={image_url} alt="" />
            {
                details.length > 200 ? <p>{details.slice(0, 200)} <Link 
                    className="text-orange-600"
                    to={`/news/${_id}`}
                    >Read More...</Link></p>
                    : <p>{details}</p>
            }
            
            <hr className="mt-3" />
            <div className="flex items-center justify-between border px-3 py-4 mt-3 mb-6">
                <div>rating</div>
                <div>{total_view}</div>
            </div>
        </div>
    );
};

export default NewsCard;