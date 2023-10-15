import './card.css';


function Card(props) {
    const isDesign = props.title.split(' ').at(-1).toLowerCase() === 'design';
    return (
        <>
            <div className="card" style={{ backgroundColor: props.number%2 ==0 ? '#404040' :'#959188'}}>
                <div className="title text-font" >
                    {props.title}
                </div>
                <span style={{ backgroundColor: isDesign ? '#fff' : 'transparent' }}></span>
            </div>
        </>
    );
}

export default Card;