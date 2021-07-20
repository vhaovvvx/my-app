import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import HobbyList from '../component/Home/HobbyList/index';
// import PropTypes from 'prop-types';

HomePage.propTypes = {
    
};

const randomId = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        const newId = randomId();
        //random a hobby object: id + title
        // Dispatch action to add a new hobby to redux store
        const newHobby = {
            // id: casual.uuid,
            // title:casual.title,
            id:newId,
            title:`Hobby ${newId}`

        }
        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }
    return (
        <div className="home-page">
            <h1>Redux Hooks - Home Page</h1>
            <button onClick={handleAddHobbyClick}>Button</button>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick}></HobbyList>

        </div>
    );
}

export default HomePage;