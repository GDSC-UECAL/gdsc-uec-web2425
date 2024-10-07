import React, { useState } from 'react';
import ExecutiveDept from '../components/ExecutiveDept.jsx';
import '../components/TeamsMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeamsExecutive() {
    const [activeOption, setActiveOption] = useState('Executive');

    return (
        <div>
            <ExecutiveDept activeOption={activeOption} setActiveOption={setActiveOption} />
        </div>
    );
};

export default TeamsExecutive;