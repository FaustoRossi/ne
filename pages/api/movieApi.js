import axios from "axios";

const APIKey = "k_6dxf4wsg";

export default axios.create({
	baseURL: `https://imdb-api.com/en/API/Search/${APIKey}/`,
});
