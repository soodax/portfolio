import './Project.scss';
import arrow_icon from './../../../assets/images/arrow.png';

const Project = ({
    id,
    name,
    info,
    stack,
    link,
    img
}) => {

    return (
        <div className='project'>
            <div className='project__name'>
                {name}
                <img src={img} alt=""/>
            </div>
            <div className='project__info'>
                {info}
            </div>
            <div className='project__stack'>
                {stack}
            </div>
            <div className='project__link'>
                <a href={link} target='_blank'>
                    Visit project
                    <img src={arrow_icon} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Project;