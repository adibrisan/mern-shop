import React, { useState } from "react";
import { useLocation } from "react-router";

import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";

import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
} from "./ProductList.style";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filterProducts, setFilterProducts] = useState({});
  const [sortProducts, setSortProducts] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilterProducts({
      ...filterProducts,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <option disabled>Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <option disabled>Size</option>
            <option>xs</option>
            <option>s</option>
            <option>m</option>
            <option>L</option>
            <option>xl</option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSortProducts(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products
        category={category}
        filterProducts={filterProducts}
        sortProducts={sortProducts}
      />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
