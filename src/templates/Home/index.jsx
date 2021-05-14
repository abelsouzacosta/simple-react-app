import React from "react";
import "./styles.css";
import { loadPosts } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export default class Home extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: "",
  };

  componentDidMount() {
    this.makePosts();
  }

  makePosts = async () => {
    const { page, postsPerPage } = this.state;
    const posts = await loadPosts();
    this.setState({
      posts: posts.slice(page, postsPerPage),
      allPosts: posts,
    });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      searchValue: value,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({
      posts,
      page: nextPage,
    });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue
      ? posts.filter((posts) => {
          return posts.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-value">
          {searchValue ? <h1>Search Value: {searchValue}</h1> : ""}

          <Input
            searchValue={searchValue}
            handleChange={this.handleChange}
          ></Input>
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts}></Posts>}
        {filteredPosts.length === 0 && <p>Unfortunatelly nothing was found</p>}
        <div className="button-container">
          {searchValue ? (
            ""
          ) : (
            <Button
              text="Carregue mais posts"
              action={this.loadMorePosts}
              disabled={noMorePosts}
            ></Button>
          )}
        </div>
      </section>
    );
  }
}
