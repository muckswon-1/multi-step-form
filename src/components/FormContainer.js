import { AddOns } from './AddOns';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import Summary from './Summary';
import Thankyou from './Thankyou';
import styles from './styles/FormContainer.module.css';
export default function FormContainer(){
    return(
        <div className={styles.container}>
            <Thankyou/>
        </div>
    )
}