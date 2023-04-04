import Link from "next/link";
import Image from "next/image";

function MainHeader() {
  return (
    <div className="main__header">
        <div className='logo'>
      <Image src="/img/badgerdao-logomark.svg" alt='Logo' width={44} height={48} priority></Image>
        </div>
        <div className='head'>
            <nav className='left'>
                <ul>
                    <li>FORUM</li>
                    <li>VOTE</li>
                    <li>BLOG</li>
                    <li>DOCS</li>
                    <li>GITHUB</li>
                </ul>
            </nav>
            <div className='right'>
                <div className='icons'>
                    <Image src="/img/discord.svg" width={20} height={20} alt="icon_discord"/>
                    <Image src="/img/twitter.svg" width={20} height={20} alt="icon_twitter"/>
                    <Image src="/img/youtube.svg" width={20} height={20} alt="icon_youtube"/>
                    <Image src="/img/reddit.svg" width={20} height={20} alt="icon_reddit"/>
                </div>
            <Link href="/eBTC"><button>Go To App</button></Link>
            </div>
        </div>
    </div>
  );
}

export default MainHeader;