import axios from "axios";

class ApiRequest {

  constructor(){
    this.baseUri = process.env.REACT_APP_API
  }

  async findById(id, token){
    try {
      const headerRequest = {headers: {Authorization: `Bearer ${token}`}};
      const response = await axios.get(`${this.baseUri}/api/users/${id}`, headerRequest);
      return response.data;

    } catch (error) {
      console.log(error.response.data)
    }
  }
  
  async recoveryPassword(user){
    const response = await axios.post(`${this.baseUri}/management/new-cod`, user);
    return response.data;
  }

  async updatePassword(user) {
    const response = await axios.post(`${this.baseUri}/management/change-password`, user);
    return response.data;
  }

  async validatorToken(user){
    try {
      const response = await axios.post(`${this.baseUri}/management/login` , user)
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default ApiRequest;