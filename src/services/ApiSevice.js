import axios from "axios";

class ApiService {
  async getParentData() {
    const API_URL = `http://localhost:3001/api/getparentdata`;
    try {
      let response = await axios(API_URL, {});
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async postTreeFormData(values) {
    const API_URL = `http://localhost:3001/api/createuser`; //edit this url according to the problem statement
    let options = {
      url: API_URL,
      method: "POST",
      //   headers: "Bearer authToken",
      data: values,
    };
    try {
      // let response = await axios(options);
      // return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default new ApiService();
