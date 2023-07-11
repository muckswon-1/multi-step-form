import Header from "./Header";
import styles from './styles/Summary.module.css';
import Button from "./Button";

export default function Summary(){
    return (
        <div  className={styles.container}>
            <Header title="Finishing up" details="Double-check everything looks ok before confirming"/>
            <table>
                <thead>
                    <tr>
                        <th>Arcade(monthly)</th>
                        <th>$9/mo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Online Service</td>
                        <td>+1/mo</td>
                    </tr>
                    <tr>
                        <td>Larger Storage</td>
                        <td>+2/mo</td>
                    </tr>
                </tbody>
                <tfoot>
                    <td>Total(per month)</td>
                    <th>+$12/mo</th>
                </tfoot>
            </table>
            <div className={styles.buttons}>
            <Button text="Go Back" type="back"/>
            <Button text="Confirm" type="confirm"/>
           </div>
        </div>
    )
}