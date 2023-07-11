import styles from './styles/AddOns.module.css';
import Header from "./Header";
import Button from './Button';

export function AddOns(){
    return(
        <div className={styles.container}>
            <Header title="Pick Add-ons"
            details="Add-ons help enhance your gaming experience"/>

            <div className={styles.addOns}>
               <div className={styles.addOnContainer}>
               <input id='online_service' type="checkbox"/>
               <label htmlFor='online_service'>
                <span className={styles.addOnTitle}>Online Service</span>
                <span className={styles.addOnDescription}>Access to multiplayer games</span>
               </label>
                <span className={styles.addOnPrice}>+10/yr</span>
               </div>

               <div className={styles.addOnContainer}>
               <input id='online_service' type="checkbox"/>
               <label htmlFor='online_service'>
                <span className={styles.addOnTitle}>Online Service</span>
                <span className={styles.addOnDescription}>Access to multiplayer games</span>
               </label>
                <span className={styles.addOnPrice}>+10/yr</span>
               </div>

               <div className={styles.addOnContainer}>
               <input id='online_service' type="checkbox"/>
               <label htmlFor='online_service'>
                <span  className={styles.addOnTitle}>Online Service</span>
                <span className={styles.addOnDescription}>Access to multiplayer games</span>
               </label>
                <span className={styles.addOnPrice}>+10/yr</span>
               </div>
            </div>

            <div className={styles.buttons}>
            <Button text="Go Back" type="back"/>
            <Button text="Next Step" type="next"/>
           </div>
        </div>
    )
}