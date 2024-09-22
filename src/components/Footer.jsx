const Footer = () => {
  return (
    <>
      <div className="bg-black h-96 ">
        <div className=" text-gray-300 p-12">
          <div className="flex flex-wrap gap-32 justify-center">
            <div>
              <ul className="space-y-3">
                <li className="text-lg font-bold text-white">Company</li>
                <li className="hover:text-white cursor-pointer">About</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="text-lg font-bold text-white">Company</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Team</li>
                <li className="hover:text-white cursor-pointer"> One </li>
                <li className="hover:text-white cursor-pointer">Instamart</li>
                <li className="hover:text-white cursor-pointer">Genie</li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                <li className="text-lg font-bold text-white">Support</li>
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">FAQ</li>
                <li className="hover:text-white cursor-pointer">Live Chat</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="text-lg font-bold text-white">Legal</li>
                <li className="hover:text-white cursor-pointer">
                  Terms of Service
                </li>
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-white cursor-pointer">Cookies</li>
                <li className="hover:text-white cursor-pointer">Security</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="text-lg font-bold text-white">Follow Us</li>
                <li className="hover:text-white cursor-pointer">Facebook</li>
                <li className="hover:text-white cursor-pointer">Twitter</li>
                <li className="hover:text-white cursor-pointer">Instagram</li>
                <li className="hover:text-white cursor-pointer">LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
