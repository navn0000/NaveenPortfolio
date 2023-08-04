import Styles from '../styleSheets/HomePage.module.css';
import Image from 'next/image';
import PR from '../assets/pr.jpeg'

export const AboutSplitOne = () => {
    return (<div className='container-fluid'>

        <div className='row'>
            <div className='col-md-12'>
                <div className={`row d-flex justify-content-center ${Styles.home}`}>
                    <Image src={PR} alt='img' className={Styles.profileImage}></Image>
                </div>
                <div className={Styles.ContentAbout}>
                    <p>Hey! <span className={Styles.Name}>I am Naveenkumar Ramkumar,</span> hailing from the beautiful city of Coimbatore in Tamil Nadu, India. I am a passionate individual with diverse interests and a love for life. Cricket is more than just a sport to me; it's a passion that brings joy and excitement to my days. Whether on the field or cheering for my favorite team, cricket is an integral part of my life.
                    </p>


                    <p>
                        On the professional front, I am enthusiastic and dedicated to my work. Embracing challenges and striving to grow, I approach every task with a sense of purpose and determination. Contributing meaningfully to my profession brings me immense satisfaction.
                    </p>
                    <p>In my personal life, I value relationships and cherish spending time with loved ones. I believe in the importance of balance, making time for both personal pursuits and being there for those who matter most.
                    </p>
                    <p>Overall, I am an individual who finds joy in the simple pleasures of life, be it playing cricket, exploring new books, or excelling in my chosen field of work. I am constantly evolving, seeking knowledge, and embracing the beauty of life's journey.</p>

                </div>
            </div>
        </div>
    </div>)
}

export const AboutSplitTwo = () => {
    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className='text-center'>Education Background</h1>
                <div className={Styles.ContentAboutTwo}>
                   <p>
My educational journey has been shaped by some of the finest institutions in the region. In 2019, I successfully completed my undergraduate studies, earning a Bachelor of Science (B.Sc.) degree in Computer Technology from Hindustan College of Arts and Science. During my time there, I gained valuable knowledge and skills in the field of computer technology, preparing me for a promising career ahead.</p>
                <p>Prior to that, I completed my Higher Secondary Certificate (HSC) from PSG Sarvajana Higher Secondary School in 2016. The school's nurturing environment and excellent faculty contributed significantly to my academic growth during those crucial years of my education.</p>
               <p>My foundation for learning was laid during my Secondary School Leaving Certificate (SSLC) education at SMTD Padmavathi Ammal High School. The school's emphasis on academic excellence and holistic development has left a lasting impact on my approach to learning.</p>
                </div>
            </div>
        </div>
    </div>)
}

export const AboutSplitThree = () => {
    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className='text-center'>Professional Background</h1>
                <div className={Styles.ContentAboutTwo}>
                   <p>I began my professional journey outside the realm of Information Technology, venturing into a non-IT field at the start of my career. However, in 2021, I made a significant decision to transition my career path towards the exciting and dynamic world of software development. Driven by a genuine passion for learning new technologies and a desire to explore the vast possibilities in the software industry, I eagerly embraced this new challenge.</p>
               <p>Since then, I have dedicated myself to honing my skills and expertise as a software developer. With my relentless enthusiasm for staying up-to-date with the latest advancements and trends in the field, I have effectively adapted to the fast-paced nature of software development. My journey has been marked by continuous growth, as each project and opportunity has presented me with valuable experiences and insights.</p>
                <p>Currently, I boast approximately 2 years of experience as a software developer, during which I have contributed to various projects, collaborated with diverse teams, and delivered innovative solutions. My journey has taught me the value of adaptability, problem-solving, and teamwork in creating robust and efficient software applications.</p>
                <p>As I continue to progress in my software development career, I remain eager to tackle new challenges, embrace emerging technologies, and contribute meaningfully to the ever-evolving IT landscape.</p>
                </div>
            </div>
        </div>
    </div>)
}

export const AboutSplitFour = () => {
    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className='text-center'>For Connect</h1>
            </div>
        </div>
    </div>)
}

export const AboutSplitFive = () => {
    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <p className='text-center'>Linked In</p>
            </div>
        </div>
    </div>)
}