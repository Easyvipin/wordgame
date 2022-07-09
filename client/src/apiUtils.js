import axios from "axios";

const token = process.env.REACT_APP_OWL_ACCESS_TOKEN;
const validationFetch = async (word) => {
  try {
    let res = await axios
      .get(`/${word}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => response.statusText === "OK");
    return res;
  } catch (error) {
    if (error.response.statusText === "Not Found") {
      return false;
    }
  }
};

export default validationFetch;
