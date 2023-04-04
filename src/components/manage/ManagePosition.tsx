

function ManagePosition() {

    const ETH = 1700
    const BTC = 27500

    const ETH_DEPOSIT = 20.253
    const EBTC_BORROWED = 0.51245545

    const ADDRESS = '0x2E62404Ab0D1CC93D1C1C0279f243CC9B0'



    return (
        <div id="contentManage">

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
    )
}

export default ManagePosition