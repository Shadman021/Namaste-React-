import {useContext} from 'react';
import UserContext from '../util/UserContext';

const About = () => {
    const {loggedInUser} = useContext(UserContext);
    
    return (
        <div>
            <h1>This is an about page...</h1>
            <h2>{loggedInUser}</h2>
        </div>
    )
}
export default About;