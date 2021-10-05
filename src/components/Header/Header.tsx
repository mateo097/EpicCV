import { Link } from '..'
import './Header.css'
import { FaGithub, FaPhoneSquare } from 'react-icons/fa'
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai"

const Header = () => {
    return (
        <header className="header back-primary color-white ">
            <div className="header-pic-container flex ">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHA6v_IdlA4gA/profile-displayphoto-shrink_800_800/0/1596715984790?e=1638403200&v=beta&t=9UtD7xWEv14149wfZzLWXbvjP992FYxT7ScQyGiRc6A" alt="anti_prejudice_pic " className="header-pic" />
            </div>

            <div className="flex column justify-around align-center">
                <div className="size-little">Mateo Andrés Busto</div>
                <div className="">Jr Developer</div>
                <Link icon={<FaPhoneSquare />} href="#">351 7888991 - 351 7628382</Link>
                <Link icon={<AiOutlineMail />} href="#">mateobusto97@gmail.com</Link>
            </div>
            <div className="flex column justify-evenly align-center">
                <Link icon={<FaGithub />} iconStyle="white" href="https://github.com/mateo097">github.com/mateo097</Link>
                <Link icon={<AiFillLinkedin />} iconStyle="white" href="https://www.linkedin.com/in/mateo-andr%C3%A9s-busto-a837341a0/">linkedin.com/in/mateo-andr...</Link>

            </div>
        </header>
    )
}

export default Header