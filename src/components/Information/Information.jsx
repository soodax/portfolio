import './Information.scss';

const Information = (props) => {
    return (
        <div id='informationSection' className='information'>
            <div className='container'>
                <div className="information__row">
                    <div className='information__col'>
                        <h2 className="information__title">HELLO, <br />WORLD</h2>
                    </div>
                    <div className='information__col info-block'>
                        <div className='information__sub-title title'>
                            Some information
                        </div>
                        <div className="information__text">
                            Hello, my name is David. I create web-sites and apps using <span>HTML</span>, <span>CSS</span> and <span>JavaScript</span>. <br />
                            Instead of usual CSS, I use SCSS preprocessor. For creating web-apps I use React.js. <br />
                            As a state manager I use Redux.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;