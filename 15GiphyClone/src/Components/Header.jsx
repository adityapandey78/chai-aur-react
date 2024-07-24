import { useEffect, useState } from "react";
import GifProvider, { GifState } from "../Context/Gif-context";
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  const [category, setCategory] = useState([]);
  const [showCategory, setShowCategory] = useState(false);

  const { gif, filter, setFilter, favourites } = GifState();

  const fetchGifCategories = async () => {
    const res = await fetch("/categories.json");
    const { data } = await res.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to={"/"} className="flex gap-2">
          <img src="/logo.svg" alt="Giphy Logo" className="w-8" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <div className="font-bold text-md flex gap-2 items-center">
          {/* Render Categories */}
          {category?.slice(0, 5).map((cat) => {
            return (
              <Link
                key={cat.name}
                to={`/${cat.name_encoded}`}
                className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
              >
                {cat.name}
              </Link>
            );
          })}
          ;
          <button onClick={() => setShowCategory(!showCategory)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showCategory ? "gradient" : ""
              } border-b-4 hidden lg:block`}
            />
          </button>
          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to="/favourites"> Favourite GIFs</Link>
          </div>
          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>

        {showCategory && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span>Categories</span>
            <hr />
            <div>
              <Link className="font-bold ">Reactions</Link>
            </div>
          </div>
        )}
      </div>

      {/* {search} */}
    </nav>
  );
};

export default Header;
