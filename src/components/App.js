import React, { Component } from "react";
import * as apiHits from "../services/apiHits";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import styles from "./App.module.css";

export default class App extends Component {
  state = {
    hits: [],
    error: null,
    query: "",
    page: 1,
    loading: false,
    isShowModal: false,
    idImg: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      if (query !== "") {
        this.fetchAPI();
      }
    }
  }

  onSubmit = (query) => {
    this.setState({
      query,
      page: 1,
      hits: [],
    });
  };

  fetchAPI = () => {
    const { query, page, hits } = this.state;

    this.setState({
      loading: true,
    });
    apiHits
      .fetchHits(query, page)
      .then(({ data }) => {
        this.setState({
          hits: [...hits, ...data.hits],
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  handleClickBtn = () => {
    const { page } = this.state;

    this.setState({
      page: page + 1,
    });
  };

  getLargeURL = () => {
    const { hits, idImg, isShowModal } = this.state;

    const item = hits.find(({ id }) => id === Number(idImg));
    return isShowModal ? item.largeImageURL : "";
  };

  handleOpenModal = (e) => {
    this.setState({
      isShowModal: true,
      idImg: e.target.closest("li").id,
    });
  };
  handleCloseModal = () => {
    this.setState({
      isShowModal: false,
    });
  };

  render() {
    const { error, hits, loading, isShowModal } = this.state;

    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.onSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {hits.length > 0 && (
          <>
            <ImageGallery hits={hits} isOpenModal={this.handleOpenModal} />
          </>
        )}

        {loading && <Loader />}

        {hits.length > 0 && !loading && (
          <Button onClickBtn={this.handleClickBtn} />
        )}

        {isShowModal && (
          <Modal onClick={this.handleCloseModal}>
            <img src={this.getLargeURL()} alt="img" />
          </Modal>
        )}
      </div>
    );
  }
}
