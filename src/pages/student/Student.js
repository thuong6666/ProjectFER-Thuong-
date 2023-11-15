import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import Profile from "./Profile";
import Class from "./Class";
import Feedback from "./Feedback";
export default function Student(props) {
    const navigate = useNavigate();
    
    useEffect(()=>{
     if(localStorage.length === 0){
        alert('please login first!')
        navigate('/login')
     }
    },[])

    return (
        <>
            <Layout name="Manage" >
           <Class/>

            </Layout>
        </>
    )
}