import React, { useEffect, useRef } from "react";
import style from "./admin.module.css";
import NavBar from "../../component/navBar/NavBar";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import ManageUser from "./adminComponent/manageUser/ManageUser";

export default function Admin(props) {
    const navigate = useNavigate();
    useEffect(()=>{
     if(localStorage.length === 0){
        alert('please login first!')
        navigate('/login')
     }
    },[])
    return (
        <>
    <Layout name = "Manage user" > 
        
        <ManageUser />
        <ManageUser />
    </Layout>
        </>
    )
}