import Styles from '../../styleSheets/HomePage.module.css';
import Empty from "../../assets/empty.jpg";
import Image from "next/image";

export default function Projects(){
    return(<div>
     <div className={`text-center ${Styles.Projects}`}>
<Image src={Empty} alt='img' width="300" height="200"></Image>

    <p>Apologies, currently there are no projects in the box. However, it will be filled shortly and showcased on this page.</p>
     </div>
    </div>)
}