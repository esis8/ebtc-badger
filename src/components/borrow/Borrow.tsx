import React, {useEffect, useState} from 'react';
import Create from './Create';
import Close from './Close';

function Borrow() {



    const [visible, SetVisible] = useState(true);

    function DownUp() {
        if (visible) {
            return (
                <Create/>
            )
        } else {
            return (
                <Close />
            )
        }
    }



    return (
        <div id="content">
            <div className='radios'>
                <input id="rad1" type="radio" name="radioBtn" onClick={() => SetVisible(true)}/>
                <label className="labels" htmlFor="rad1"><b style={visible ? {color: "#141414"} : {color: "#FFFFFF"}}>CREATE</b></label>
                <input id="rad2" type="radio" name="radioBtn" onClick={() => SetVisible(false)}/>
                <label className="labels" htmlFor="rad2"><b style={visible ? {color: "#FFFFFF"} : {color: "#141414"}}>CLOSE</b></label>
                <div className="bckgrnd"></div>
            </div>
            <DownUp/>
        </div>
    );
  }




  
  export default Borrow;