class AsyncHelperLib {
    // AsyncHelperLib -- get data with try catch
    // Date: 2019-01-11
    // Author: M.Carbone
    // Release: 0.1.0

    name = 'asyncHelperLib';
    url = '';

    constructor(length) { }
  
    get url() {
      return this.url;
    }
  
    set url(value) {
      this.url = value;
    }
      
    loadDataFromServerByURL = async (url) => {
      try {
        const response = await axios.get(`${url}`);
              return response.data;
      } catch (error) {
        throw new Error(`@error at loadDataFromServerByURL ${url}`);
      }
    };

  }

  export default AsyncHelperLib