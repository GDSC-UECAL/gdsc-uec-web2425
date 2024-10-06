import React, { useState } from 'react';
import CreativesDept from '../components/CreativesDept.jsx';
import '../components/TeamsMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeamsCreatives() {
    const [activeOption, setActiveOption] = useState('Creatives');

    return (
        <div>
            <CreativesDept activeOption={activeOption} setActiveOption={setActiveOption} />
        </div>
    );
};

export default TeamsCreatives;