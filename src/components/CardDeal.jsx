import { card } from "../assets"
import styles,{layout} from "../style"
import Button from "./Button"

 const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a Better card deal <br className='sm:block hidden'/>
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-with-[470px] mt-5`}>lorem dgfhnbcv ffghsdb 
        mxjhxsf vzfsdczb nchgf tgh ncbcfd
        bcgdhfjustrdvcb
        mcncnchf ncbbcgd bgf ng a hcgvbbnv 
        nhhdgfbvnmxkcjcgsbx  nvvbxxgdgdg cmjgfusgdfr</p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )
}
export default CardDeal