import { PrimarySpecialization } from "@/Api's/interface/PersonDetails";
import styles from "./services.module.css";
interface Iprops {
  data?: PrimarySpecialization[];
}
const Services: React.FC<Iprops> = ({ data }) => {
  return (
    <div className={styles.detailsParent}>
      <div className={styles.details}>
        <div className={styles.servicesOffered}>{`Services Offered `}</div>
      </div>
      <div className={styles.frameParent}>
        {data?.map((i: PrimarySpecialization, key) => {
          return (
            <div className={styles.frameGroup} key={key}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.brick}>
                  <img className={styles.carpenter113} alt="" src={i.icon} />
                </div>
              </div>
              <div className={styles.workType1Parent}>
                <div className={styles.mobileWorktype}>
                  <img src={i.icon} alt="" />
                  <div className={styles.workType21}>{i.slug}</div>
                </div>
                <div className={styles.chipParent}>
                  {i?.secondaryCategories?.map((category: string) => {
                    return (
                      <div className={styles.chip}>
                        <div className={styles.labelWrapper}>
                          <div className={styles.label}>{category}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
