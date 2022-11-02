import axios from "axios";

const BASE_URL = "https://jssampletest.herokuapp.com/api/";

export default {
    getArticle: function(seq){
        return axios.get(BASE_URL + `board/${seq}`);
    },

    getArticles: function(page){
        console.log(page);
        return axios.get(
            BASE_URL + "board/all"           
            );
    
    },
    
    postArticle: function(content, title){
          return axios.post(
            BASE_URL + "board/",
            {
                content:content,
                title:title,
                
            }
          );
    },
    addSignup: function(city,email,name,password,street,zipcode){
        return axios.add(
            BASE_URL + "auth/signup",
            {
                city:city,
                email:email,
                name:name,
                password:password,
                street:street,
                zipcode:zipcode,
            }           
            );
    },

    inSignin: function(email, password){
        return axios.in(
          BASE_URL + "auth/login",
          {
            email:email,
            password:password,
              
          }
        );
  },

    // patchArticle: function(id, title, body){
    //     return axios.patch(BASE_URL+`posts/${id}`,{
    //         title: title,
    //         body: body,
    //     });
    // }
}