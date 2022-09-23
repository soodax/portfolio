import './Information.scss';

const Information = (props) => {
    return (
        <section id='informationSection' className='information'>
            <div className='container'>
                <div className="information__row">
                    <div className='information__col'>
                        <h2 className="title-big">HELLO, <br />WORLD</h2>
                    </div>
                    <div className='information__col info-block'>
                        <div className='information__sub-title title'>
                            Some information
                        </div>
                        <div className="information__text">
                            <p>Hello, my name is David. I create web-sites and apps using <span>HTML</span>, <span>CSS</span> and <span>JavaScript</span>.</p> 
                            <p>Instead of usual CSS, I prefer <span>SASS</span> preprocessor. For creating web-apps I use <span>React.js</span> and <span>TypeScript</span>.</p>
                            <p>As a state manager I use <span>Redux</span>/<span>Redux Toolkit</span>.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information;