import React, { useState } from 'react';
import CommunityDept from '../components/CommunityDept.jsx';
import '../components/TeamsMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeamsCommunity() {
    const [activeOption, setActiveOption] = useState('Community Development');

    return (
        <div>
            <CommunityDept activeOption={activeOption} setActiveOption={setActiveOption} />
        </div>
    );
};

export default TeamsCommunity;