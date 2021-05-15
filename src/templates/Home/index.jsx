import React, { useCallback, useEffect } from "react";
import "./styles.css";
import { loadPosts } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState("");
  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue
    ? posts.filter((posts) => {
        return posts.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const makePosts = useCallback(async (page, postsPerPage) => {
    const posts = await loadPosts();
    setPosts(posts.slice(page, postsPerPage));
    setAllPosts(posts);
  }, []);

  useEffect(() => {
    makePosts(0, postsPerPage);
  }, [makePosts, postsPerPage]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  return (
    <section className="container">
      <div className="search-value">
        {searchValue ? <h1>Search Value: {searchValue}</h1> : ""}

        <Input searchValue={searchValue} handleChange={handleChange}></Input>
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts}></Posts>}
      {filteredPosts.length === 0 && <p>Unfortunatelly nothing was found</p>}
      <div className="button-container">
        {searchValue ? (
          ""
        ) : (
          <Button
            text="Carregue mais posts"
            action={loadMorePosts}
            disabled={noMorePosts}
          ></Button>
        )}
      </div>
    </section>
  );
};

export default Home;
