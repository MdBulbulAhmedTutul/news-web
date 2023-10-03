import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Leftsidenav = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl">All Categories</h2>
            {
                catagories.map(catagory =>
                    <NavLink
                        className="block my-5 border ml-4 mr-3 px-3 py-2"
                        to={`/category/:${catagory.id}`}
                        key={catagory.id}>
                        {catagory.name}
                    </NavLink>)
            }
        </div>
    );
};

export default Leftsidenav;