import { useState } from 'react';
import Create from './Create';
import Close from './Close';

function Borrow() {



    const [visible, setVisible] = useState(true);


    return (
        <div id="content">
            <div className='radios'>
                <input id="rad1" type="radio" name="radioBtn" onClick={() => setVisible(true)}/>
                <label className="labels" htmlFor="rad1"><b style={visible ? {color: "#141414"} : {color: "#FFFFFF"}}>CREATE</b></label>
                <input id="rad2" type="radio" name="radioBtn" onClick={() => setVisible(false)}/>
                <label className="labels" htmlFor="rad2"><b style={visible ? {color: "#FFFFFF"} : {color: "#141414"}}>CLOSE</b></label>
                <div className="bckgrnd"></div>
            </div>
            {visible ? <Create /> : <Close />}
        </div>
    );
  }




  
  export default Borrow;
