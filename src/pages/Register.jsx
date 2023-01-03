import React, { useState} from 'react';
import Add from '../img/addAvatar.png';
import {  createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth,storage,db } from "../firebase";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";


const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target.displayName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const file = e.target.file.files[0];

       try {
           const res = await createUserWithEmailAndPassword(auth, email, password);

           const storageRef = ref(storage, displayName);

           const uploadTask = uploadBytesResumable(storageRef, file);

           uploadTask.on('state_changed',
               (snapshot) => {
                   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                   console.log('Upload is ' + progress + '% done');
               },
               (error) => {
                   setErr(true)
               },
               () => {
                   getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                       await updateProfile(res.user, {
                              displayName: displayName,
                              photoURL: downloadURL,
                       });
                       await setDoc(doc(db, "users", res.user.uid), {
                           uid: res.user.uid,
                           displayName,
                           email,
                           photoURL : downloadURL
                       });

                       await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                   });
               }
           );


       } catch (e) {
              setErr(true)
       }
    };

    return (
       <div className='formContainer'>
           <div className='formWrapper'>
               <span className="logo">Lama Chat</span>
               <span className="title">Register</span>
               <form onSubmit={handleSubmit}>
                   <input name={"displayName"} type={"text"} placeholder={"display Name"} />
                   <input name={"email"} type={"email"} placeholder={"email"} />
                   <input name={"password"} type={"password"} placeholder={"password"} />
                   <input name={"avatar"} style={{display:"none"}} type={"file"} id={"file"} />
                   <label htmlFor="file">
                       <img src={Add} alt={"select avatar"} />
                       <span>Add an avatar</span>
                   </label>
                     <button className="btn">Sign up</button>
                   {err && <span className="err">Something went wrong</span>}
               </form>
               <p>You do have an account ?
                   <Link to="/login"> Login </Link>
               </p>
           </div>
       </div>
    );
};
export default Register;

