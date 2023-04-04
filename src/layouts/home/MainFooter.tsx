import Link from "next/link";
import Image from "next/image";

function MainFooter() {
  return (
    <div className="main__footer">
        <div className='logo'>
      <Image src="/img/badgerdao-logo.svg" alt='LogoLetters' width={175} height={50} priority></Image>
        </div>
        <div className="rights">
            <p>Fostering Community Driven Growth for Bitcoin across DeFi.</p>
            <p>© BadgerDAO 2023. All rights reserved.</p>
        </div>
        <div className='foot'>
            <nav className='left'>
                <ul>
                    <li>Forum</li>
                    <li>Vote</li>
                    <li>Blog</li>
                    <li>Docs</li>
                    <li>Github</li>
                </ul>
            </nav>
            <div className='right'>
                <div className='icons'>
                    <Image src="/img/discord.svg" width={24} height={24} alt="icon_discord"/>
                    <Image src="/img/twitter.svg" width={24} height={24} alt="icon_twitter"/>
                    <Image src="/img/youtube.svg" width={24} height={24} alt="icon_youtube"/>
                    <Image src="/img/reddit.svg" width={24} height={24} alt="icon_reddit"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MainFooter;