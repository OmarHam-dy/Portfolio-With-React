import Progress from '../progress bar/progress';
import './skills.css';

const skills = [
    {
        name: 'HTML',
        percent: 80
    },
    {
        name: 'CSS',
        percent: 75
    },
    {
        name: 'JavaScript',
        percent: 90
    },
    {
        name: 'Bootstrap',
        percent: 65
    },
    {
        name: 'WordPress',
        percent: 65
    },
    {
        name: 'Figma',
        percent: 90
    },
    {
        name: 'NodeJS',
        percent: 55
    },
    {
        name: 'ReactJS',
        percent: 80
    },
];


const renderProgressBars = function () {
    return skills.map((skill, i) =>
        <Progress
            key={i}
            title={skill.name}
            percent={skill.percent}
        />
    )
}


function Skills() {
    return ( 
        <>
            <div className="skills">
                <div className="container">
                    <div className="heading title-font">Skills</div>
                    <p className='text-font'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quibusdam tempora nulla voluptas, ducimus similique sapiente nihil non doloremque repellendus repudiandae, consequuntur rerum explicabo error officia veritatis accusamus a omnis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repudiandae quam vitae nihil nostrum inventore qui repellat dolores, tempora eius.
                    </p>
                    <div className="content text-font">
                        <ul>
                            <i> my focus </i>
                            <i>UI/UX Design</i>
                            <i>Responsive Design</i>
                            <i>Web Design</i>
                            <i>Mobile App Design</i>
                        </ul>
                        <div>
                            {renderProgressBars()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;