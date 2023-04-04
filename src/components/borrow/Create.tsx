import React, {useEffect, useState} from 'react';
import { setDepositstEth, setDepositEbtc, setUsdBtc, setUsdStEth } from '@/redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/types";

function Create() {

    const ETH = 1700
    const BTC = 27500

    const [spinMint, setSpinMint] = useState(false)
    const [usdEthCoin, setUsdEthCoin] = useState("")
    const [usdBtcCoin, setUsdBtcCoin] = useState("")
    const [receiveEBtc, setReceiveEbtc] = useState("")
    const [receiveUsdEBtc, setReceiveUsdEbtc] = useState("")
    const [collateral, setCollateral] = useState("");
    const eBtcDeposit = useSelector((state: RootState)=> state.eBtcDeposit)
    const stEthDeposit = useSelector((state: RootState)=> state.stEthDeposit)
    const usdBtc = useSelector((state: RootState)=> state.usdBtc)
    const usdStEth = useSelector((state: RootState)=> state.usdStEth)

    const dispatch = useDispatch();

    const handleChangeInputStEth = (event:React.ChangeEvent<HTMLInputElement>) => {
        
        if (event.target.value !== '' && (1000 * parseFloat(event.target.value))/1000 !== 0) {
            const stEth = event.target.value
            dispatch(setDepositstEth(stEth));
        }
        else {
            dispatch(setDepositstEth(''));
        }
    };

    const handleChangeInputEBtc = (event:React.ChangeEvent<HTMLInputElement>) => {
        
        if (event.target.value !== '' && (1000 * parseFloat(event.target.value))/1000 !== 0) {
            const eBTC = event.target.value
            dispatch(setDepositEbtc(eBTC));
        }
        else {
            dispatch(setDepositEbtc(''));
        }
    };

    function handleMaxClick() {
        const eBTC = (parseFloat(usdEthCoin)*0.9)/(0.995*BTC);
        dispatch(setDepositEbtc(eBTC.toFixed(8).toString()))
      }

      function confirmCreate(){
            setSpinMint(true)
            setTimeout(()=>{
                setSpinMint(false);
                //handleClickOpen1()
            },2000);
        }
        
    useEffect(()=>{
        dispatch(setDepositEbtc(''));
        dispatch(setDepositstEth(''));
    
    },[dispatch]); 

    useEffect(()=>{

        setUsdEthCoin((Math.round(((parseFloat(stEthDeposit)*.995*ETH))*100000000)/100000000).toFixed(2).toString())

        setUsdBtcCoin((Math.round(((parseFloat(eBtcDeposit)*.995*BTC))*100000000)/100000000).toFixed(2).toString())

        setReceiveEbtc((Math.round(((parseFloat(eBtcDeposit)*.995))*100000000)/100000000).toString())

        setReceiveUsdEbtc((Math.round(((parseFloat(eBtcDeposit)*.995*BTC))*100000000)/100000000).toFixed(2).toString())

        setCollateral((Math.round((((parseFloat(stEthDeposit)*.995*ETH)/(parseFloat(eBtcDeposit)*.995*BTC)))*100000000)/100000000).toFixed(2).toString())

    },[stEthDeposit, eBtcDeposit]);


    return (
        <div id="CREATE">
            <p className="title">Create CDP</p>
            <div className='sectionCreate'>
            <div className='menu__create'>
            <p className="title2">Collateral</p>
                <div className='inputs'>
                    <input type="number" pattern="[0-9]+" min="0" placeholder="0.00"
                    className="inputIn"
                    size={30}
                    id="stEthAmount"
                    name="stEthAmount"
                    onChange={handleChangeInputStEth}
                    value={stEthDeposit}
                    />
                    <div className="lblInp">
                        stETH
                    </div>
                    <div className="usdInp"> ~ $ { parseFloat(stEthDeposit) == 0 || isNaN(parseFloat(stEthDeposit)) ? "0.00":usdEthCoin}</div>
                </div>
                <div className='titles'>
                    <p className='title2'>Debt</p>
                    <p className='title2 max' onClick={handleMaxClick}>Max</p>
                </div>      
                
                <div className='inputs'>
                    <input type="number" pattern="[0-9]+" min="0" placeholder="0.00"
                    className="inputIn"
                    size={30}
                    id="eBtcAmount"
                    name="eBtcAmount"
                    onChange={handleChangeInputEBtc}
                    value={eBtcDeposit}
                    />
                    <div className="lblInp">
                        eBTC
                    </div>
                    <div className="usdInp"> ~ $ { parseFloat(eBtcDeposit) == 0 || isNaN(parseFloat(eBtcDeposit)) ? "0.00": usdBtcCoin}</div>
                </div>          

        <div className="resultCreate">
            <div className="left">You Will Receive</div>
            <div className="right">
                <div><b> {parseFloat(eBtcDeposit) == 0 || isNaN(parseFloat(eBtcDeposit)) ? "0.00": receiveEBtc}  eBTC</b></div>
                <div className="usdInp"> = $  {parseFloat(eBtcDeposit) == 0 || isNaN(parseFloat(eBtcDeposit)) ? "0.00":receiveUsdEBtc} </div>
            </div>
            
        </div>


        </div>
        <div className='statusCreate'>
            <p>Collateral Ratio: <br />{parseFloat(stEthDeposit) == 0 || isNaN(parseFloat(stEthDeposit)) || isNaN(parseFloat(eBtcDeposit)) ? "0.00": collateral}</p>
            <p>Liquidation Price: <br />{parseFloat(stEthDeposit) == 0 || isNaN(parseFloat(stEthDeposit)) || isNaN(parseFloat(eBtcDeposit)) ? "0.00 " : (ETH/(BTC*(parseFloat(collateral)-1))).toFixed(4).toString()} ETH/BTC</p>
            <p>Liquidation Reserve: <br />{parseFloat(stEthDeposit) == 0 || isNaN(parseFloat(stEthDeposit)) || isNaN(parseFloat(eBtcDeposit)) ? "0.00 " : ((parseFloat(usdEthCoin)*0.9)/(0.995*BTC)-parseFloat(receiveEBtc)).toFixed(8).toString()} eBTC</p>
        </div>
            </div>
        <button
            onClick={confirmCreate}
            type="button" className="mainButton">{spinMint ? <div className='spinner create'></div>:""}Create</button>    
    </div>
    );
  }

  export default Create;