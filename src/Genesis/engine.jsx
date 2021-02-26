import React, {useState} from 'react';

function EngineRenderer(props) {
    const[engine, setEngine] = useState(props.value);

    const onEngineChange = (event) => {
        props.onEngineChange(event.target.value);
        setEngine(event.target.value);
    }
    return(
        <div>
            <select value={engine} onChange={onEngineChange}>
                <option value="powercurves"> powercurves </option>
                <option value="smarts"> smarts </option>
                <option value="interconnect"> interconnect </option>
                {/* <option value="yellow"> yellow </option>
                <option value="violet"> violet </option> */}
            </select>

        </div>

    )
}
  
export default EngineRenderer;