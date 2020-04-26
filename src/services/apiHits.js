import axios from "axios";

export const fetchHits = (query = "", page = 1) =>
  axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=15710234-8951b07a1d3bf1777c4958c43&image_type=photo&orientation=horizontal&per_page=12`
  );
