import { BiLogoGoogle } from 'react-icons/bi';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const Rightsidenav = () => {
    return (
        <div>
            <div className='p-4 mb-7'>
                <h2 className="text-2xl font-semibold mb-2">Login With</h2>
                <button className="mb-2 btn btn-outline btn-secondary w-full">
                    <BiLogoGoogle className='text-black text-2xl'></BiLogoGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline btn-secondary w-full">
                    <AiFillGithub className='text-black text-2xl'></AiFillGithub>
                    Login With GitHub
                </button>
            </div>
            <div className='px-4 mb-7'>
                <h2 className="text-2xl font-semibold mb-2">Find Us On</h2>
                <div className=''>
                    <a className='border px-3 py-2 flex items-center mb-3 hover:bg-gray-200' href="#">
                        <span className='ml-2 mr-3 text-2xl'><BsFacebook></BsFacebook></span>
                        Facebook
                    </a>
                    <a className='border px-3 py-2 flex items-center mb-3 hover:bg-gray-200' href="#">
                        <span className='ml-2 mr-3 text-2xl'><AiOutlineTwitter></AiOutlineTwitter></span>
                        Twiter
                    </a>
                    <a className='border px-3 py-2 flex items-center mb-3 hover:bg-gray-200' href="#">
                        <span className='ml-2 mr-3 text-2xl'><BsInstagram></BsInstagram></span>
                        Istagram
                    </a>
                </div>
            </div>
            <div className='bg-gray-300 mb-7'>
                <h2 className="text-2xl font-semibold mb-2">Q Zone</h2>
                <img className='mb-10 px-2 w-full' src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default Rightsidenav;