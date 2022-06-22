import axios from "axios";

const APIKey = "k_fofsm80y";

export default axios.create({
	baseURL: `https://imdb-api.com/en/API/Search/${APIKey}/`,
});
