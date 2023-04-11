import React, {useEffect, useState} from 'react';

const ETH = 1700
const BTC = 27500

const TVL = 35294.11;
const EBTC_BORROWED = 752.35;

const data = [
  {
    pool: "eBTC/WBTC",
    protocol: "Curve",
    apr: "7.2%",
    volume:"$20.1M",
    tvl: "11.1M"
  },
  {
    pool: "eBTC/DAI",
    protocol: "Curve",
    apr: "5.5%",
    volume:"$22.5M",
    tvl: "15M"
  },
  {
    pool: "eBTC/stEHT",
    protocol: "Yearn Finance",
    apr: "4.5%",
    volume:"$8.3M",
    tvl: "7.2M"
  }
]

function Dashboard() {
    return (
      <div id="DASHBOARD">
        <div className="dashboard_group">
          <div className="dashboard_item">
            <h2>Total Collateral Value</h2>
            <p>{TVL} stETH</p>
            <p className='item_usd'>{(TVL*ETH).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} usd</p>
          </div>
          <div className="dashboard_item">
            <h2>Total eBTC Borrowed</h2>
            <p>{EBTC_BORROWED} eBTC</p>
            <p className='item_usd'>{(BTC*EBTC_BORROWED).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} usd</p>
          </div>
          <div className="dashboard_item">
            <h2>Current Overcollateralization</h2>
            <p className='item_overCo'>{((TVL*ETH)/(BTC*EBTC_BORROWED)).toFixed(2).toString()}</p>
          </div>
        </div>
        <div className='pool_group'>
          <table className="tablePool" >
                    <thead>
                    <tr>
                        <th className="td_Title">Pool</th>
                        <th className="td_Title">Protocol</th>
                        <th className="td_Title">APR</th>
                        <th className="td_Title">Volume</th>
                        <th className="td_Title">TVL</th>
                    </tr>
                    </thead>
                    <tbody className='underline' >
                      <tr>
                        <td><hr className='underline'/></td>
                        <td><hr className='underline'/></td>
                        <td><hr className='underline'/></td>
                        <td><hr className='underline'/></td>
                        <td><hr className='underline'/></td>
                      </tr>                    
                    </tbody>
                    <tbody>
                      {data.map((row, i)=>(
                        <tr key={i}>
                          <td className='td_body'>{row.pool}</td>
                          <td className='td_body'>{row.protocol}</td>
                          <td className='td_body'>{row.apr}</td>
                          <td className='td_body'>{row.volume}</td>
                          <td className='td_body'>{row.tvl}</td>
                        </tr>
                      ))}
                    </tbody>
          </table>
        </div>

      </div>
    );
  }

  
  export default Dashboard;