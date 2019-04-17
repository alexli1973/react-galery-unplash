import React from 'react';
import axios from 'axios';

class ApiService {
    // constructor() {
    //     debugger;
    //     this.accessKey = '232b180336ed15f727b1051be98f347b14b406133f75ee1d3457912077a54e22';
    //     this.baseUrl = 'https://api.unsplash.com/photos/';
    // }

   static _accessKey = '232b180336ed15f727b1051be98f347b14b406133f75ee1d3457912077a54e22';
    _baseUrl = 'https://api.unsplash.com/photos/';
    page = 1;
    per_page = 3;
    reqUrl = `${this._baseUrl}?client_id=${ApiService._accessKey}&page=${this.page}&per_page=${this.per_page}`;

    async getResource() {
        const res = await axios.get(this.reqUrl);

        if(res.status !=200) {
            throw new Error(`Could not fetch ${this.reqUrl}` + `, received ${res.status}`);
            console.log(res);
        }
        return  res.data;
    }

    getImages() {
        return this.getResource();
    }

    ddd = () => {}


   // getImages: function (xxx) {
   //  return xxx
   // }
       // return axios.get(`${this.baseURL}?client_id=${this.accessKey}&page=${page}&per_page=${per_page}`)
     //   return `${this.baseURL}?client_id=${this.accessKey}&page=${page}&per_page=${per_page}`;
    //    return 5555;
    //}
}

export default ApiService;