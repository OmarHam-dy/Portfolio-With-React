import './progress.css';

function Progress(props) {
    const percentage = `${props.percent}%`;

    return ( 
        <>
            <div className="progress">
                <div className="title text-font">{props.title}</div>
                <div className="bar">
                    <span style={{width: percentage}}></span>
                </div>
            </div>
        </>
    );
}

export default Progress;