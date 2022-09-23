import Project from './Project/Project';
import './Projects.scss';
import { projectsArray } from '../../data/projectsArray';

const Projects = (props) => {
    return (
        <section id='projectsSection' className='projects'>
            <div className='container'>
                <div className='projects__row'>
                    <h2 className='title'>Projects</h2>
                    <div className='projects__block'>
                        {projectsArray.map(item => {
                            return <Project key={item.id}
                                 id={item.id}
                                name={item.name}
                                info={item.info}
                                stack={item.stack}
                                link={item.link}
                                img={item.img} />
                        })}
                        <div className='projects__other'>
                            See more projects on <br /> 
                            <a href='https://github.com/soodax' target='_blank' rel='noreferrer'>Github</a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;