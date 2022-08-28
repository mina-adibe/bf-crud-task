import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Posts from "../component/posts/Posts";
import Search from "../component/search/Search";

const Home = () => {
  const originalposts = useSelector((state) => state.posts);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(originalposts);
  }, [originalposts]);

  const handleChange = (event) => {
    if (!event.target.value) return setSearchResults(originalposts);
    const resultsArray = originalposts.filter(
      (post) => post.title.includes(event.target.value) || post.body.includes(event.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <>
      <Container>
        <Search handleChange={handleChange} />
        <Posts posts={searchResults} />
      </Container>
    </>
  );
};

export default Home;
