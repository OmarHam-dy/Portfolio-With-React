import Card from '../portfolio cards/card';
import './portfolio.css';

const categories = [
    'web design',
    'mobile design',
    'logo design',
    'web application development',
    'mobile application development',
    'PWA development'
]


const renderPortfolioCards = function () {
    return categories.map((category, i) =>
        <Card
            key={i}
            number={i}
            title={category}
        />
    )
}


function Portfolio() {
    return ( 
        <>
            <div className="portfolio">
                <div className="container">
                    <div className="heading">Portfolio</div>
                    <div className="content">
                        {renderPortfolioCards()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;