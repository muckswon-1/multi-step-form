import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import styles from './styles/PersonalInfo.module.css'

export default function PersonalInfo(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  
   const handleNameChange = e => setName(e.target.value);
   const handleEmailChange = e => setEmail(e.target.value);
   const handlePhoneChange = e => setPhone(e.target.value);

   const handleSubmit = e =>{
    e.preventDefault();
    alert(`
       Name: ${name}
       Email: ${email}
       Phne: ${phone};
    `)
   }
  
    return (
        <div className={styles.container}>
            <Header title="Personal Info"
             details="Please provide your name,email address, and phone number."
            />
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputDiv}>

                <label htmlFor="name">Name</label>
                <input type="text"
                onChange={handleNameChange}
                id="name"
                
                placeholder="e.g. Mucks Won"/>
              </div>

              <div className={styles.inputDiv}>
              <label htmlFor="email">Email Address</label>
                <input type="email"
                id="email"
                onChange={handleEmailChange}
                placeholder="e.g. muckswon@gmail.com"/>
              </div>

             <div className={styles.inputDiv}>
             <label htmlFor="name">Phone number</label>
                <input type="text"
                id="phone"
                onChange={handlePhoneChange}
                placeholder="e.g. +254 729 439 194"/>
             </div>

                <Button  text="Next Step" type="next"/>
            </form>
        </div>
    )
}