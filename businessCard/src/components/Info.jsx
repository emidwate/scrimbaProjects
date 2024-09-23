import Einstei from '../images/einstein.jpg'
import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

export default function Info() {
  return (
    <div className="info" >
      <img src={Einstei} className="info--image" alt='Image of Alber Einstein'/>
      <h1 className='info--full--name'>Albert Einstein</h1>
      <p className='info--job'>Founder of Theory of Relativity</p>
      <p className='info--email'>albereinstein@gmail.com</p>
      <div className="buttons">
        <button className='button button--email'> 
            <MdEmail className='icons button--email--icon'/>   
            Email
        </button>
        <button className='button button--linkedin'>
            <CiLinkedin className='icons button--linkedin--icon'/>
            LinkedIn
        </button>
      </div>
    </div>
  )
}