import Link from 'next/link';
import styles from './download-card.module.css';
const DownloadCard = () => {
  	return (
    		<div className={styles.container1}>
      			<Link href="https://play.google.com/store/apps/details?id=com.projecthero.contractor&hl=en_IN&gl=US" target="_blank" className={styles.textContent}
				>
        				<img className={styles.qrCode2Icon} alt="" src="assets/qr-code 2.png" />
        				<div className={styles.downloadOurProjecthero}>Download our ProjectHero App for more updates!</div>
        				<div className={styles.loremIpsumDolor1}>Lorem ipsum dolor sit amet. Aut neque error et reprehenderit.</div>
                        <div className={styles.textContentChild}>
                            <img src='assets/Icon.svg' alt='' className='playstoreIcon'/>
                           {/* <img alt="" src="assets/Google Play.svg"/ > */}
                        </div>
        				
      			</Link>
    		</div>);
};

export default DownloadCard;
