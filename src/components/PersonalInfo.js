import Button from "./Button";
import Header from "./Header";
import styles from './styles/PersonalInfo.module.css'

export default function PersonalInfo(){
    return (
        <div className={styles.container}>
            <Header title="Personal Info"
             details="Please provide your name,email address, and phone number."
            />
            <form className={styles.form}>
              <div className={styles.inputDiv}>

                <label htmlFor="name">Name</label>
                <input type="text"
                id="name"
                placeholder="e.g. Mucks Won"/>
              </div>

              <div className={styles.inputDiv}>
              <label htmlFor="email">Email Address</label>
                <input type="email"
                id="email"
                placeholder="e.g. muckswon@gmail.com"/>
              </div>

             <div className={styles.inputDiv}>
             <label htmlFor="name">Phone number</label>
                <input type="text"
                id="phone"
                placeholder="e.g. +254 729 439 194"/>
             </div>

                <Button  text="Next Step"/>
            </form>
        </div>
    )
}