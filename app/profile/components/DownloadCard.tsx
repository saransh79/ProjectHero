import Link from 'next/link';
import styles from './download-card.module.css';
const DownloadCard = () => {
  	return (
		<Link href="https://play.google.com/store/apps/details?id=com.projecthero.contractor&hl=en_IN&gl=US" target="_blank" className={styles.downloadWrapper}>
			<div className={styles.container1}>
      			<div className={styles.textContent}
				>
        				<img className={styles.qrCode2Icon} alt="" src="/assets/qr-code 2.png" />
        				<div className={styles.downloadOurProjecthero}>Download our ProjectHero App for more updates!</div>
        				<div className={styles.loremIpsumDolor1}>Join India's Biggest Construction Network. Find Verified Orders, Material and Labor.</div>
                        <div className={styles.textContentChild}>
                            <img src='/assets/G play.png' alt='' />
                        </div>
        				
      			</div>
    		</div>
		</Link>
    		
			);
};

export default DownloadCard;
