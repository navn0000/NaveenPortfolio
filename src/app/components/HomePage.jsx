import Image from 'next/image';
import Styles from '../styleSheets/HomePage.module.css';
import PR from '../assets/pr.jpeg';


export default function HomePage(){
    return(<div className='container-fluid'>
 
        <div className='row'>
            <div className='col-md-12'>
                <div className={`row d-flex justify-content-center ${Styles.home}`}>
                    <Image src={PR} alt='img' className={Styles.profileImage}></Image>
                </div>
                <div className={Styles.Content}>
                  <p>Hey! <span className={Styles.Name}>I am Naveenkumar Ramkumar </span>and I welcome you to my digital realm, where creativity meets innovation! 
                    As a passionate software developer, I embark on a journey fueled by React.js, 
                    JavaScript, HTML, and CSS, crafting seamless user experiences that leave a lasting impact. 
                    With Next.js, Redux, and Bootstrap as my trusted companions, I transform ideas into reality,
                     breaking barriers and crossing borders. From web marvels to mobile sensations with React Native,
                     I revel in the art of code. Step into my world, where pixels dance, and dreams come to life!</p>
                </div>
            </div>
        </div>
    </div>)
}