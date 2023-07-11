import styles from './styles/Aside.module.css';
  
function Step({number,description}){
    return (
        <div className={styles.stepContainer}>
            <div className={styles.stepCircle}>{number}</div>
            <div className={styles.stepDetails}>
                <span className={styles.stepNumber}>STEP {number}</span>
                <span className={styles.stepDescription}>{description}</span>
            </div>
        </div>
    )
}


export default function Aside(){
    return (
        <div className={styles.container}>
            <Step number={1} description="YOUR INFO"/>
            <Step number={2} description="SELECT PLAN"/>
            <Step number={3} description="ADD-ONS"/>
            <Step number={4} description="SUMMARY"/>
        </div>
    )
}