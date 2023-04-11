import React, {useEffect, useState} from 'react';

function ManagePosition() {

    const ETH = 1700
    const BTC = 27500

    const ETH_DEPOSIT = 20.253
    const EBTC_BORROWED = 0.51245545

    const ADDRESS = '0x2E62404Ab0D1CC93D1C1C0279f243CC9B0'

    const [eBtcDebit, SetEBtcDebit] = useState('');
    const [stEthColl, SetStEthColl] = useState('');

    function handleMaxClickEBtc() {
        const eBTC = EBTC_BORROWED;
        SetEBtcDebit(eBTC.toString());
      }

      function handleMaxClickStEth() {
        const stETH = ETH_DEPOSIT;
        SetStEthColl(stETH.toString());
      }

      const handleChangeInputStEthColl = (event:React.ChangeEvent<HTMLInputElement>) => {
        
        if (event.target.value !== '' && (1000 * parseFloat(event.target.value))/1000 !== 0) {
            const stETH = event.target.value
            SetStEthColl(stETH);
        }
        else {
            SetStEthColl('');
        }
    };  


    const handleChangeInputeBtcDebit = (event:React.ChangeEvent<HTMLInputElement>) => {
        
        if (event.target.value !== '' && (1000 * parseFloat(event.target.value))/1000 !== 0) {
            const eBtc = event.target.value
            SetEBtcDebit(eBtc);
        }
        else {
            SetEBtcDebit('');
        }
    };

    return (
        <div id="MANAGE">
            <div className="contentPosition">

                <div className="position">
                <h2 className="title__manage">Position Overview</h2>
                <div className="address">
                    <p className="title">ID</p>
                    <p>{ADDRESS}</p>
                </div>
                <div className="metrics">
                    <p className="title">Metrics</p>
                    <div className="all_position">
                        <div className="item_position">
                            <p>{ETH_DEPOSIT} stETH</p>
                            <p>$ {(ETH_DEPOSIT*ETH).toFixed(2).toString()}</p>
                        </div>
                        <div className="item_position">
                            <p>{EBTC_BORROWED} eBTC</p>
                            <p>$ {(EBTC_BORROWED*BTC).toFixed(2).toString()}</p>
                        </div>
                        <div className="item_position">
                            <p>{((ETH_DEPOSIT*ETH)/(EBTC_BORROWED*BTC)).toFixed(2).toString()} Collateral Ratio</p>
                            <p>{(((EBTC_BORROWED*BTC)/(ETH_DEPOSIT*ETH*.9))*100).toFixed(2).toString()}% Utilization</p>
                        </div>
                    </div>
                    <div className="liquidation">
                        <p>Current Price: {(ETH/BTC).toFixed(6).toString()}</p>
                        <p>Liquidation Price: {(ETH/(BTC*(((ETH_DEPOSIT*ETH)/(EBTC_BORROWED*BTC)-1)))).toFixed(6).toString()}</p>
                    </div>
                </div>

                <button className="close_position">Close</button>

                </div>
            </div>

            <div className="contentAdjust">
                <div className="position">
                    <h2 className="title__manage">Adjust Position</h2>
                    <div className="action">
                        <div className="actionItem">
                        <p className="title">Collateral Action</p>
                        <section className="collateral_section">
                            <div className="selection">                        
                                <label htmlFor="collateral"> 
                                    <input type="radio" name="collateral" value="deposit" id="collateral"/>Deposit
                                </label>

                                <label htmlFor="collateral"> 
                                    <input type="radio" name="collateral" value="withdraw"  id="collateral"/>Withdraw
                                </label>
                            </div>
                            <div className="input_collateral">
                                <input type="number" pattern="[0-9]+" min="0" placeholder="0.00"
                                className="inputIn"
                                size={30}
                                id="stEthAmount"
                                name="stEthAmount"
                                onChange={handleChangeInputStEthColl}
                                value={stEthColl}
                                /> <span className="lblInput">stEHT</span><p onClick={handleMaxClickStEth}>Max</p>
                            </div>
                        </section>
                    </div>
                    <div className="actionItem">
                        <p className="title">Debit Action</p>
                        <section className="debit_section">
                            <div className="selection">                        
                                <label htmlFor="debit"> 
                                    <input type="radio" name="debit" value="borrow" id="debit"/>Borrow
                                </label>

                                <label htmlFor="debit"> 
                                    <input type="radio" name="debit" value="repay"  id="debit"/>Repay
                                </label>
                            </div>
                        
                            <div className="input_debit">
                                <input type="number" pattern="[0-9]+" min="0" placeholder="0.00"
                                className="inputIn"
                                size={30}
                                id="stEthAmount"
                                name="stEthAmount"
                                onChange={handleChangeInputeBtcDebit}
                                value={eBtcDebit}
                                /> <span className="lblInput">eBTC</span><p onClick={handleMaxClickEBtc}>Max</p>
                            </div>
                        </section>
                        </div>
                            <div className="borrowInfo">
                                <p>Borrow Fee: {parseFloat(eBtcDebit) == 0 || isNaN(parseFloat(eBtcDebit)) ? "0.00":(Math.round(((parseFloat(eBtcDebit)*0.005))*100000000)/100000000).toString().toString()} eBTC</p>
                                <p>Borrow Interest: 0.5%</p>
                            </div>

                    
                    </div>
                    <button className="adjust_position">Adjust</button>
                </div>
                
            </div>

        </div>
    )
}

export default ManagePosition