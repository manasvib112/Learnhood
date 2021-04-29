import axios from "axios";
axios.defaults.baseURL="http://localhost:1337";


class RestClient {
constructor(){
    
}
    static endPoint;
     get(){
   return axios.get(this.constructor.endPoint).then(res=>{
        return res;
    }).catch((err)=>{
        return err;
    })
    }

    post(body){
        return axios.post(this.constructor.endPoint,body).then(data=>{
            return data
        }).catch(err=>{
            return err;
        })
    }
}

export default RestClient