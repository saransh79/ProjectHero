import type { NextPage } from 'next';
import styles from './download-card.module.css';
const DownloadCard:NextPage = () => {
  	return (
    		<div className={styles.container1}>
      			<div className={styles.textContent}>
        				<img className={styles.qrCode2Icon} alt="" src="assets/qr-code 2.png" />
        				<div className={styles.downloadOurProjecthero}>Download our ProjectHero App for more updates!</div>
        				<div className={styles.loremIpsumDolor1}>Lorem ipsum dolor sit amet. Aut neque error et reprehenderit.</div>
                        <div className={styles.textContentChild}>
                            <img src='assets/Icon.svg' alt='' className='playstoreIcon'/>
                           {/* <img alt="" src="assets/Google Play.svg"/ > */}
                        </div>
        				
      			</div>
    		</div>);
};

export default DownloadCard;
