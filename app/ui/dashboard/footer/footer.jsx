import styes from "./footer.module.css"

const Footer = () =>{
    return(
        <div className={styes.container}>
            <div className={styes.logo}>Bao Kha dev</div>
            <div className={styes.text}>@All rights reserved.</div>
        </div>
    )
}
export default Footer