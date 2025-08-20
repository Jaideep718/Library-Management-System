import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  const encodedTitle = encodeURIComponent(item.title);

  return (
    <Link to={`/book/${encodedTitle}`}>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-1000 dark:text-white">
          <figure className="sm:h-60 md:h-72 lg:h-96">
            <img
              className="w-full h-65 object-cover rounded-md"
              src={
                item.img ||
                "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=ais_user"
              }
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <p>Genre: {item.genre}</p>
            <div className="card-actions justify-between">
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:text-white duration-200">
                Count: {item.count}
              </div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200">
                <Link to={`/issue/${encodedTitle}`}>Issue Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
