import Header from "../components/Header";
import {FcEmptyTrash} from 'react-icons/fc';
import Styles from '../styleSheets/HomePage.module.css';

export default function Projects(){
    return(<div>
<Header />
     <div className={`text-center ${Styles.Projects}`}>
        <span className={Styles.Bucket}><FcEmptyTrash />
</span>
    <p>Sorry, at the moment there are no projects in the bucket !</p>
     </div>
    </div>)
}