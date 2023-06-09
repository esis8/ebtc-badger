import Link from 'next/link';
import Image from 'next/image';
import React, {useEffect} from 'react';

function Menu() {

    useEffect(() => {
        if(typeof window !== "undefined"){

                let menuActive = document.querySelectorAll(".menu-item")

        
                for (const items of menuActive) {
                    if (items.getAttribute("href") == window.location.pathname) {
                        items.classList.add("active");
                    }
                
                    items.addEventListener("click", function(this: HTMLElement) {
                        for (const item of menuActive) {
                            item.classList.remove("active");
                        }
                        this.classList.add("active");
                    });
                }
        }
      }, []);

    return (
        <div className="sidebar" id="sidebar">
            <div className="menuTop">
                <div className="net">
                    Testnet
                </div>
            </div>
            <div className="sidebar_content">
                <ul className="menuList">

            <Link href="/eBTC" className="menu-item">
            
                <div className="menu-icon">
                <Image src='/img/dashboard_dark.png' alt="Dashboard" id="Vector" className="dark__mode" width={16} height={15}/>
                </div>
                <li className="btnM">
                Dashboard
                </li>
        
            </Link>

            <Link href='/eBTC/create-close' className="menu-item">
                
                    <div className="menu-icon">
                    <Image src='/img/bridge_dark.png' alt="Borrow" id="Vector" className="dark__mode" width={12} height={15}/>
                    </div>
                    <li className="btnM">
                     Create / Close
                    </li>
                
            </Link>

            <Link href="/eBTC/manage" className="menu-item">      

                <div className="menu-icon">
                <Image src='/img/transactions_dark.png' alt="manage" id="Vector" className="dark__mode" width={16} height={15}/>
                </div>
                <li className="btnM">
                    Manage
                </li>


            </Link>




            </ul>
                <br/>
            <hr id="menuHR"></hr>
            <ul>



            <a href="" target="_blank" className="menu-item">
                <div className="menu-icon">
                    <Image src='/img/docs_dark.png' alt="anetaDocs" id="Vector" className="dark__mode" width={15} height={15}/>
                </div>

                <li className="btnM">
                    Docs
                    <Image src='/img/link_dark.png' alt="anetaLink" id="linkImg" className="dark__mode" width={9} height={9}/>
                      
                </li>
            </a>
            </ul>

            <div className="socialMedia">
                <a href="" className="menu-icon">
                    <Image src='/img/twitter.png' alt="twitter" id="Vector-sm" width={17} height={17}/>
                </a>
                <a href="" className="menu-icon">
                    <Image src='/img/discord.png' alt="discord" id="Vector-sm" width={17} height={17}/>
                </a>
                <a href="" className="menu-icon">
                    <Image src='/img/telegram.png' alt="telegram" id="Vector-sm" width={17} height={17}/>
                </a>
                <a href="" className="menu-icon">
                    <Image src='/img/git.png' alt="dithub" id="Vector-sm" width={17} height={17}/>
                </a>
            </div>
            </div>
        </div>
    )
}
export default Menu;