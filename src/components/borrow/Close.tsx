import React, {useEffect, useState} from 'react';
import { setDepositstEth, setDepositEbtc, setUsdBtc, setUsdStEth } from '@/redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/types";

function Close() {

    const ETH = 1700
    const BTC = 27500

    const ETH_DEPOSIT = 20.253
    const EBTC_BORROWED = 0.51245545

    const [spinMint, setSpinMint] = useState(false)
    const [usdEthCoin, setUsdEthCoin] = useState("")
    const [usdBtcCoin, setUsdBtcCoin] = useState("")
    const [receiveStETH, setReceiveStETH] = useState("")
    const [receiveUsdStETH, setReceiveUsdStETH] = useState("")
    const [collateral, setCollateral] = useState("");
    const eBtcDeposit = useSelector((state: RootState)=> state.eBtcDeposit)
    const stEthDeposit = useSelector((state: RootState)=> state.stEthDeposit)
    const usdBtc = useSelector((state: RootState)=> state.usdBtc)
    const usdStEth = useSelector((state: RootState)=> state.usdStEth)

    const dispatch = useDispatch();

    const handleChangeInputEBtc = (event:React.ChangeEvent<HTMLInputElement>) => {
        
        if (event.target.value !== '' && (1000 * parseFloat(event.target.value))/1000 !== 0) {
            const eBTC = event.target.value
            const stEth = (parseFloat(eBTC)*BTC/ETH).toFixed(8).toString();
            dispatch(setDepositEbtc(eBTC));
            dispatch(setDepositstEth(stEth));

        }
        else {
            dispatch(setDepositEbtc(''));
        }
    };

    function handleMaxClick() {
        const eBTC = EBTC_BORROWED;
        dispatch(setDepositEbtc(eBTC.toFixed(8).toString()))
        const stEth = (eBTC*BTC/ETH).toFixed(8).toString();
        dispatch(setDepositstEth(stEth))
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

        setReceiveStETH((Math.round(((parseFloat(stEthDeposit)*.995))*100000000)/100000000).toString())

        setReceiveUsdStETH((Math.round(((parseFloat(stEthDeposit)*.995*ETH))*100000000)/100000000).toFixed(2).toString())

        setCollateral((Math.round((((parseFloat(stEthDeposit)*.995*ETH)/(parseFloat(eBtcDeposit)*.995*BTC)))*100000000)/100000000).toFixed(2).toString())

    },[stEthDeposit, eBtcDeposit]);


    return (
        <div id="CLOSE">
            <p className="title">Close CDP</p>
            <div className='sectionClose'>
            <div className='menu__close'>
                <div className='titles'>
                    <p className="title2">Debt</p>
                    <p className='title2 max' onClick={handleMaxClick}>Max</p>
                </div>
                <div className='inputs'>
                    <input type="number" pattern="[0-9]+" min="0" placeholder="0.00"
                    className="inputIn"
                    size={30}
                    id="EbtcAmount"
                    name="EbtcAmount"
                    onChange={handleChangeInputEBtc}
                    value={eBtcDeposit}
                    />
                    <div className="lblInp">
                        eBTC
                    </div>
                    <div className="usdInp"> ~ $ { parseFloat(eBtcDeposit) == 0 || isNaN(parseFloat(eBtcDeposit)) ? "0.00":usdBtcCoin}</div>
                </div>
                    <p className='title2'>Withdraw</p>
                <div className='inputs'>
                    <input type="number" pattern="[0-9]+" min="0" placeholder="0.00"
                    className="inputIn"
                    size={30}
                    id="stEthAmount"
                    name="stEthAmount"
                    value={stEthDeposit}
                    readOnly
                    />
                    <div className="lblInp">
                        stETH
                    </div>
                    <div className="usdInp"> ~ $ { parseFloat(stEthDeposit) == 0 || isNaN(parseFloat(stEthDeposit)) ? "0.00": usdEthCoin}</div>
                </div>          

        <div className="resultCreate">
            <div className="left">You Will Receive</div>
            <div className="right">
                <div><b> {parseFloat(eBtcDeposit) == 0 || isNaN(parseFloat(eBtcDeposit)) ? "0.00": receiveStETH}  stETH</b></div>
                <div className="usdInp"> = $  {parseFloat(eBtcDeposit) == 0 || isNaN(parseFloat(eBtcDeposit)) ? "0.00":receiveUsdStETH} </div>
            </div>
            
        </div>


        </div>
        <div className='statusCreate'>
            <p>eBTC Debit: <br />{EBTC_BORROWED} eBTC</p>
            <p>stETH Deposited: <br /> {ETH_DEPOSIT} stETH</p>
            <p>Collateral Ratio: <br /> {((ETH_DEPOSIT*ETH)/(EBTC_BORROWED*BTC)).toFixed(2).toString()}
            <br />
            <b>{(((EBTC_BORROWED*BTC)/(ETH_DEPOSIT*ETH*.9))*100).toFixed(2).toString()}% Utilization</b></p>
        </div>
            </div>
        <button
            onClick={confirmCreate}
            type="button" className="mainButton">{spinMint ? <div className='spinner create'></div>:""}Close</button>    
    </div>
    );
  }

  export default Close;