import Header from "./Header";
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';
import styles from './styles/SelectPlan.module.css';
import { useState } from "react";
import Button from "./Button";
function Plan({plan,time,price}){
    let icon = undefined;

    switch(plan){
        case "Arcade": icon = arcadeIcon;break;
        case "Advanced": icon = advancedIcon;break;
        case "Pro": icon = proIcon;break;
    }

    return(
        <div className={styles.plan}>
            <img src={icon} alt={`${plan} icon`}/>
            <div className={styles.planAndPrice}>
                <span className={styles.planName}>{plan}</span>
                {
                    time === "monthly" ? <span className={styles.planPrice}>{`$${price}/mo`}</span>:
                              <><span className={styles.planPrice}>{`$${price}/yr`}</span><span className={styles.monthsFree}>2 months free</span></>      
                }
            </div>
        </div>
    )
}

function MonthlyPlans(){
    return (
        <div className={styles.plansContainer}>
             <Plan plan="Arcade" 
                time="monthly"
                price={9}/>
                 <Plan plan="Advanced" 
                time="monthly"
                price={12}/>
                 <Plan plan="Pro" 
                time="monthly"
                price={15}/>
        </div>
    )
}

function YearlyPlans(){
    return (
        <div className={styles.plansContainer}>
        <Plan plan="Arcade" 
           time="yearly"
           price={90}/>
            <Plan plan="Advanced" 
           time="yearly"
           price={120}/>
            <Plan plan="Pro" 
           time="yearly"
           price={150}/>
   </div>
    )
}


export default function SelectPlan(){
    const [time,setTime] = useState('monthly');
    const [isChecked,setIsChecked] = useState(false);

    const handleChecked  = event => {
        setIsChecked(event.target.checked);
        
    }


    return (
        <div className={styles.container}>
            <Header 
            title="Select your plan"
            details="You have the option of monthly or yearly billing."/>
            {
                time === "monthly" ? <MonthlyPlans/> : <YearlyPlans/>
            }

           <div className={styles.checkboxDiv}>
           <span>Monthly</span> <input type="checkbox"
            className={styles.checkbox}
            id="toggle"
            checked={isChecked}
            onChange={handleChecked}/>
            <label className={styles.label} htmlFor="toggle"></label>
            <span>Yearly</span>
           </div>

           <div className={styles.buttons}>
            <Button text="Go Back" type="back"/>
            <Button text="Next Step" type="next"/>
           </div>
        </div>
    )
}