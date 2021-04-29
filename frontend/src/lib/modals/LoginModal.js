import RestClient from "./RestClient";
import * as yup from "yup";
import handleYupErr from "../shared/handleYupErr";

class LoginModal extends RestClient{
    static endPoint = "admin/login";
    login(body){
    return this.post(body).then((res)=>{
        const {token,user}=res.data.data;
        localStorage.setItem("token",token);
        localStorage.setItem("user",JSON.stringify(user));
        return true;
    }).catch((err) =>{
        return err;
    })
    }
    validate(body){
        let schema=yup.object().shape({
            email:yup.string().required('Email is required').email('Not a valid Email'),
            password: yup.string() .required('No password provided.') .min(8, 'Password is too short - should be 8 chars minimum.') .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        })
        return schema.validate(body).then((res)=>{
            return {...res,valid:true};
        }).catch((err)=>{
            return {...handleYupErr(err),valid:false};
        })
    }
}

export default LoginModal;