import Styles from '../styleSheets/HomePage.module.css';
import Image from 'next/image';
import PR from '../assets/pr.jpeg'
import { FaLinkedin } from 'react-icons/fa';
import { BiLogoTwitter } from 'react-icons/bi'
import { AiFillMail } from 'react-icons/ai'
import { GiBookshelf } from 'react-icons/gi'

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
                    <p>In my personal life, I value relationships and cherish spending time with loved ones. I believe in the importance of balance, making time for both personal pursuits and being there for those who matter most. </p>
                </div>
            </div>
        </div>
    </div>)
}

export const AboutSplitTwo = () => {
    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className={`text-center ${Styles.Headers}`}> 🧑🏻‍🎓 Educational Background </h1>
                <div className={Styles.ContentAbout}>
                    <p>
                        My educational journey has been shaped by some of the finest institutions in the region. I successfully completed my undergraduate studies, earning a Bachelor of Science (B.Sc.) degree in Computer Technology from Hindustan College of Arts and Science, Coimbatore. During my time there, I gained valuable knowledge and skills in the field of computer technology, preparing me for a promising career ahead.</p>
                    <p>Prior to that, I completed my Higher Secondary Certificate (HSC) from PSG Sarvajana Higher Secondary School, Coimbatore. The school's nurturing environment and excellent faculty contributed significantly to my academic growth during those crucial years of my education.</p>
                    <p>My foundation for learning was laid during my Secondary School Leaving Certificate (SSLC) education at SMTD Padmavathi Ammal High School, Coimbatore. The school's emphasis on academic excellence and holistic development has left a lasting impact on my approach to learning.</p>
                </div>
            </div>
        </div>
    </div>)
}

export const AboutSplitThree = () => {

    const joinedYear = 2021;
    const currentYear = new Date().getFullYear()
    const Experience = currentYear - joinedYear
    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className={`text-center ${Styles.Headers}`}> 👨🏻‍💻 Professional Background</h1>
                <div className={Styles.ContentAbout}>
                    <p>I began my professional journey outside the realm of Information Technology, venturing into a non-IT field at the start of my career. However, in 2021, I made a significant decision to transition my career path towards the exciting and dynamic world of software development. Driven by a genuine passion for learning new technologies and a desire to explore the vast possibilities in the software industry, I eagerly embraced this new challenge.</p>
                    <p>Since then, I have dedicated myself to honing my skills and expertise as a software developer. With my relentless enthusiasm for staying up-to-date with the latest advancements and trends in the field, I have effectively adapted to the fast-paced nature of software development. My journey has been marked by continuous growth, as each project and opportunity has presented me with valuable experiences and insights.</p>
                    <p>Currently, I boast approximately {Experience} years of experience as a software developer, during which I have contributed to various projects, collaborated with diverse teams, and delivered innovative solutions. My journey has taught me the value of adaptability, problem-solving, and teamwork in creating robust and efficient software applications.</p>
                    <p>As I continue to progress in my software development career, I remain eager to tackle new challenges, embrace emerging technologies, and contribute meaningfully to the ever-evolving IT landscape.</p>
                </div>
            </div>
        </div>
    </div>)
}

export const AboutSplitFive = () => {
    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className={`text-center ${Styles.Headers}`}>🤝 For Connect</h1>
                <div className={`d-flex justify-content-center ${Styles.ContentAbout}`}>
                    <p className='text-center m-3'><a href='https://twitter.com/NaveenBndar?t=HneTWf8KpN9zLtdLpr1edg&s=08' target='blank'>Linked<FaLinkedin /></a></p>
                    <p className='text-center m-3'><a href='https://www.linkedin.com/in/naveen-software-developer/' target='blank'>Twitter<BiLogoTwitter /></a></p>
                    <p className='text-center m-3'><a href="mailto:naveenkumar.bndar@gmail.com" target='blank'>Gmail<AiFillMail /></a></p>
                </div>
            </div>

        </div>
    </div>)
}

export const AboutSplitFour = () => {
    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className={`text-center ${Styles.Headers}`}> 🩸 Mission and Vision</h1>
                <div className={Styles.ContentAbout}>
                    <p>As a software developer, my <span className={Styles.Name}>mission</span> is to be a catalyst for positive change through the creation of innovative and purposeful digital solutions. With a relentless pursuit of excellence, I am dedicated to crafting code that transforms complex challenges into elegant and efficient software products. </p>
                    <p>In pursuit of my <span className={Styles.Name}>vision</span>, I am committed to continuous learning and staying at the forefront of emerging technologies. I envision a future where my contributions impact industries, improve lives, and foster a culture of innovation. Through dedication, perseverance, and a relentless pursuit of excellence, I am dedicated to realizing this vision and leaving an indelible mark on the world of software development.</p>
                    <p>My <span className={Styles.Name}>vision</span> extends beyond software development; it encompasses a strong desire to uplift others through my expertise. I aim to be a guiding light for aspiring developers, sharing knowledge, insights, and resources that empower them to embark on their own journeys of growth.</p>
                </div>
            </div>
        </div>
    </div>)
}

export const AboutSplitSix = () => {
    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <h1 className={`text-center ${Styles.Headers}`}>🫵🏽 A Quote for Life</h1>
                <div className={Styles.ContentAbout}>
                    <h1>Recover a failure in good way</h1>
                </div>
            </div>
        </div>
    </div>)
}
