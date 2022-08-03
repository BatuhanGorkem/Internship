import React, { useState } from "react";
import "../scss/_product.scss";
import { useEffect } from "react";
import img from "../img/image.png";
import Pagination from "./Pagination";

const Product = ({ search }) => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPage] = useState(20);

  //PAGİNATİON
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const fetchData = () => {
    fetch("http://localhost:8000/data", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(product);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);
  const filtered = currentPosts.filter(
    (item) =>
      item.name.toLowerCase().includes(search) ||
      item.name.toUpperCase().includes(search)
  );

  return (
    <>
      <section id="grid">
        {filtered.map((item) => (
          <div key={item.id} id="product">
            <img src={img} alt="Resim" id="image" />

            <h4>{item.name}</h4>
            <h3>{item.price.toLocaleString()} TL</h3>
            <h4 id="taksit">
              <b> Taksitli Fiyatı:</b> 3 * {(item.price / 3).toFixed(0)}
            </h4>
          </div>
        ))}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={product.length}
          paginate={paginate}
        />
      </section>
    </>
  );
};

export default Product;
