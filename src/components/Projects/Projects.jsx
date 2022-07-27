import Project from './Project/Project';
import './Projects.scss';
import { projectsArray } from '../../data/projectsArray';

const Projects = (props) => {
    return (
        <div id='projectsSection' className='projects'>
            <div className='container'>
                <div className='projects__row'>
                    <h2 className='title'>Projects</h2>
                    <div className='projects__block'>
                        {projectsArray.map(item => {
                            return <Project id={item.id}
                                name={item.name}
                                info={item.info}
                                stack={item.stack}
                                link={item.link}
                                img={item.img} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;