import './Main.scss';
import main_img from './../../assets/images/main.png';

const Main = (props) => {
    return (
        <section className='main'>
            <div className='container'>
                <div className='main__row'>
                    <div className='main__col'>
                        <h1 className='title-big'>MIRAKOV<br />DAVID</h1>
                        <h2 className='main__info'>Front-end developer</h2>
                    </div>
                    <div className='main__col image-block'>
                        <img src={main_img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;