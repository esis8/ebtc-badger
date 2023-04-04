import React, {useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRed } from "@/redux/actions";
import { RootState } from "@/types/types";
import { MouseEvent } from 'react';

function AppHeader() {

  const [isMenuRed, setIsMenuRed] = useState(false);

  function handleMenuClick() {
      setIsMenuRed(!isMenuRed);
    }

  function handleOptionClick(event: MouseEvent<HTMLLIElement>){
    const red: string = event.currentTarget.dataset.value ?? '';
    dispatch(setSelectedRed(red));
    setIsMenuRed(false)
  }

  const selectRed = useSelector((state: RootState) => state.selectedRed);

  const dispatch = useDispatch();

  const blockchains = ['Ethereum', 'Arbitrum', 'Optimism', 'Polygon']

  return (
    <header className="app__header">
      <div className="logo">
      <Link href="/"><Image src="/img/badgerdao-logo.svg" alt='LogoLetters' width={175} height={50} priority></Image></Link>
      </div>
      <div className="buttons">
        <button className="btn btn__test">Get Test ETH</button>
        <button className="btn">
          <div className="btn__drop" onClick={handleMenuClick}>
            <Image src={`/img/${selectRed}.png`} alt="logo-red" width={16} height={16}/>
            <p>{selectRed}</p>
          </div>
          <ul className={`blockchain_change ${isMenuRed ? "open" : ""}`}>
            {blockchains.map((block)=>(
            <li className="blockchain_item" data-value={block} key={block} onClick={handleOptionClick}><Image src={`/img/${block}.png`} alt="logo-red" width={16} height={16}/>{block}</li>))}
          </ul>
        </button>
        <button className="btn btn__connect">Connect Wallet</button>
      </div>
    </header>
  );
}

export default AppHeader;