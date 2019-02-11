import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2438acd53e0ea878e5be294dfe31a4672bb3df6496ec36ef598551c9af27e60e"
  }
});
