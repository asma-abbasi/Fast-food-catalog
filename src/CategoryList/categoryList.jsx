// import React, { useEffect, useState } from "react";
// import axios from "../axios";
import Loading from "../Loading/loading";
import useAxios from "../useAxios";

const CategoryList = ({ filterItems, children }) => {
  
  const [categories, , loading] = useAxios({
    method: "GET",
    url: "/FoodCategory/categories",
  });

  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const response = await axios.get("/FoodCategory/categories");
  //     setCategories(response.data);
  //     setLoading(false);
  //   };
  //   fetchCategories();
  // }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading theme="primary" />;
    }
    return (
      <div className="ps-3 w-100 d-flex align-items-center justify-content-between gap-5 fs-sm fw-bold">
        <ul className="nav">
          <li
            className="nav-item"
            onClick={() => {
              filterItems();
            }}
          >
            <a href="#" className="nav-link">
              همه فست فود ها
            </a>
          </li>
          {categories.map((category) => (
            <li
              className="nav-item"
              key={category.id}
              onClick={() => {
                filterItems(category.id);
              }}
            >
              <a className="nav-link" href="#">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        {children}
      </div>
    );
  };

  return (
    <nav className="container mt-n5 ">
      <div
        className="bg-white rounded-3 shadow-lg py-4 d-flex align-items-center"
        style={{ height: "80px" }}
      >
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
