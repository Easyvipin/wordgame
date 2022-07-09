import axios from "axios";
const validationFetch = async (word) => {
  try {
    let res = await axios
      .get(`/${word}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Token 029916b8079a7224e66443aa114ff14ccc1d8d99`,
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
