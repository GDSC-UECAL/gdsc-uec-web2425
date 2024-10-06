import React, { useState } from 'react';
import OperationsDept from '../components/OperationsDept.jsx';
import '../components/TeamsMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeamsOperations() {
    const [activeOption, setActiveOption] = useState('Operations');

    return (
        <div>
            <OperationsDept activeOption={activeOption} setActiveOption={setActiveOption} />
        </div>
    );
};

export default TeamsOperations;