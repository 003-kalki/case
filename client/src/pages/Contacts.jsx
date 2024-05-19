import { Link } from "react-router-dom";

export default function Contacts(){
    return(
        <div className="flex flex-col">
        <div className="text-[2.2rem] font-bold mt-7 mx-auto ">Contact Us</div>
        <div className="bg-contact-gray m-12 rounded-md shadow-md flex flex-row w-fit mx-auto">
             <div className="flex flex-col justify-evenly border-r-[0.5px] border-white">

            <div className="1 p-12  flex flex-col justify-evenly gap-5 ">
               <div className="a flex flex-row gap-5">
                <div><p>First name</p><input className="border-0 rounded-md mt-3" type="text" placeholder="Enter First Name" /></div>
                <div><p>Last name</p><input className="border-0 rounded-md mt-3" type="text" placeholder="Enter Last Name" /></div>
               </div>
               <div className="b flex flex-row gap-5">
               <div><p>Email</p><input className="border-0 rounded-md mt-3" type="email" placeholder="Enter your Email" /></div>
                <div><p>Phone</p><input className="border-0 rounded-md mt-3" type="text" placeholder="Enter Phone Number" /></div>
               </div>
               <div className="c">
               <p>Subject</p><input className="border-0 rounded-md mt-3 w-[100%]" type="text" placeholder="Enter your Subject" />
               </div>

               <div className="d">
               <label for="message">Message</label><textarea id="message"
      className="border-none mt-3 h-full min-h-[60px] w-full resize-none rounded-md bg-white px-3 py-2.5 text-sm font-normal disabled:resize-none"
      placeholder="Enter your Text here..."></textarea>
               </div>
            </div>

            <div className="e ml-auto mr-auto bg-black text-white rounded-md w-fit p-3 text-xs font-bold"><span>Send Your Message</span></div>
            </div>

            <div className="2 p-12 flex flex-col justify-evenly gap-8">
                <div className="A bg-white rounded-md px-12 py-5"><div className="bg-button-gray rounded-sm w-fit p-1 mx-auto mb-2"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z" clip-rule="evenodd"/>
</svg>
</div><p className="text-center">support@kalki.com</p></div>
                <div className="B bg-white rounded-md px-12 py-5"><div className="bg-button-gray rounded-sm w-fit p-1 mx-auto mb-2"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
</svg>
</div><p className="text-center">+91 9987304137</p></div>
                <div className="C bg-white rounded-md px-12 py-5"><Link><div className="bg-button-gray rounded-sm w-fit p-1 mx-auto mb-2"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
</svg>
</div></Link><p className="text-center">Some Where in Pune :)</p></div>
                <div className="D bg-white rounded-md px-12 py-5">
                    <div className="flex flex-row gap-1">
                <Link className="bg-button-gray rounded-sm w-fit p-1 mx-auto mb-2"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
</svg>
</Link>
                <Link className="bg-button-gray rounded-sm w-fit p-1 mx-auto mb-2">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
</svg>

                </Link>
                <Link className="bg-button-gray rounded-sm w-fit p-1 mx-auto mb-2"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>
</Link>
                </div>
                <p className="text-center">Social Profiles</p></div>
            </div>
        </div>
        </div>
    )
}
