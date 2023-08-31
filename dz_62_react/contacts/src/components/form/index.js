import { useState } from 'react';
import { Button } from 'antd';
import FormContact from './form';

export default function FromAdd(props) {
    const [vis, setVis] = useState(false);
    const toggleVis = () => setVis(prevVis => !prevVis);

    return (
        <div className="table-wrapper">
            <Button className="btn-add" onClick={toggleVis}>Add +</Button>
            {
                vis && (
                    <FormContact 
                        maxId={props.maxId} 
                        setContacts={props.setContacts} 
                        contacts={props.contacts}
                        toggleVis={toggleVis}
                        remove={props.remove} 
                    /> 
                )
            }
        </div>
    )
}


