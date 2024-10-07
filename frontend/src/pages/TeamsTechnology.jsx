import React, { useState } from 'react';
import TechnologyDept from '../components/TechnologyDept.jsx';
import '../components/TeamsMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeamsTechnology() {
    const [activeOption, setActiveOption] = useState('Technology');

    return (
        <div>
            <TechnologyDept activeOption={activeOption} setActiveOption={setActiveOption} />
        </div>
    );
};

export default TeamsTechnology;