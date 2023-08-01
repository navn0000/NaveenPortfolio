import Image from 'next/image';
import Styles from '../styleSheets/HomePage.module.css';
import PR from '../assets/pr.png'

export default function HomePage(){
    return(<div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                <div className={`row d-flex justify-content-center ${Styles.home}`}>
                    <Image src={PR} alt='img' className={Styles.profileImage}></Image>
                </div>
                <div className={Styles.Content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia nunc eget ex scelerisque, ut malesuada nibh bibendum. Vivamus facilisis erat sit amet ultricies rutrum. Nulla facilisi. Vestibulum ut lorem vel diam dictum sagittis. Aliquam consequat arcu ut metus lobortis, at viverra mi venenatis. In lacinia nulla eu quam condimentum, vitae faucibus dolor feugiat. Maecenas condimentum, nisl at finibus ullamcorper, ligula nisl interdum nisi, eget aliquam risus nibh in nunc. Curabitur venenatis purus non massa laoreet, non egestas est hendrerit. Nunc in felis ut turpis dignissim sagittis. Fusce tincidunt mauris eu odio gravida, eget consequat velit fermentum.
                        Sed auctor scelerisque ris


                    </p>
                </div>
            </div>
        </div>
    </div>)
}