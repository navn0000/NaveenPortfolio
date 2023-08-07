import Image from "next/image";
import Header from "../components/Header";
import { skills } from "../data";
import Styles from "../styleSheets/Skills.module.css"


export default function Skills() {
    return (
    <>
    <Header />
       <div className="container mt-5">
        <h1 className={Styles.Topic}>Skills are not just tools; they are the masterpieces we craft throughout our journey</h1>
        <div className="row">
            {skills.map((i)=>{
                return  <div className="col-sm-4 col-md-4">
                <div className={`card ${Styles.cardOuter}`}>
                    <div className="card-body">
                        <p>{i.title}</p>
                    </div>
                </div>
            </div>
            })}           
        </div>
    </div>
    </>
 
    )
}