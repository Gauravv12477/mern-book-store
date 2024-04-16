import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export default function MyFooter() {
  return (
    <div>
        <div className="bg-slate-800  w-full ">
           <div className="flex flex-row px-10 py-20  justify-around">          
                <div>
                    {/* 1st */}
                <div className="text-white">
                    <h1 className="text-xl font-bold">Company</h1>
                    <div className="list-none mt-5 flex flex-col gap-5 ">
                        <li className="">
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">About</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Careers</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Brand Center</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Blog</Link>
                        </li>
                    </div>
                </div>
                {/* 2nd */}
                <div className="text-white">
                    <h1 className="text-xl font-bold">Help Center</h1>
                    <div className="list-none mt-5 flex flex-col gap-5 ">
                        <li className="">
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Discord Server</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Twitter</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Facebook </Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Contact Us</Link>
                        </li>
                    </div>
                </div>
                </div>
                
                <div>
                {/* 3rd */}
                <div className="text-white">
                    <h1 className="text-xl font-bold">Legal</h1>
                    <div className="list-none mt-5 flex flex-col gap-5 ">
                        <li className="">
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Licensing</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Termm Condition</Link>
                        </li>
                        
                    </div>
                </div>
                {/* 4th */}
                <div className="text-white">
                    <h1 className="text-xl font-bold">Company</h1>
                    <div className="list-none mt-5 flex flex-col gap-5 ">
                        <li className="">
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Android</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">ios</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">Windows</Link>
                        </li>
                        <li>
                            <Link className="hover:underline hover:underline-offset-2 hover:text-slate-100">MacOS</Link>
                        </li>
                    </div>
                </div>
                </div>
           </div>
           <div className=" bg-slate-700 flex flex-row text-slate-300 py-5 px-14 w-full items-center align-middle justify-between">
                <div>
                    <span className="text-lg font-semibold">© 2024 Pustkazz™</span>
                </div>
                <div className="flex gap-4 flex-row text-2xl">
                    <FaFacebook className="hover:scale-125 hover:transition ease-in" />
                    <FaInstagram className="hover:scale-125 hover:transition ease-in"/>
                    <FaGithub className="hover:scale-125 hover:transition ease-in"/>
                    <BsTwitterX className="hover:scale-125 hover:transition ease-in"/>
                    <FaLinkedin className="hover:scale-125 hover:transition ease-in"/>
                </div>
           </div>
        </div>
    </div>
  );
}