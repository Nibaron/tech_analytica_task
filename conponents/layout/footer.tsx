import {
  FacebookIcon,
  InstagramIcon,
  LogoSite,
  PinterestIcon,
  TwitterIcon,
} from "@/assets/icons";

export const Footer = () => {
  return (
    <footer className="bg-black w-full">
      {/** Container */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/** Footer Flex Container */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/** Menu & Logo Container */}
          <div className="flex flex-col space-y-8 md:items-start md:space-y-4">
            <div className="justify-start">
              <LogoSite />
              <p className="text-white p-1 text-sm">
                Got Question? Call us 24/7
              </p>
              <p className="text-white p-1 font-semibold">+02 055 4156</p>
              <p className="text-white p-1 text-sm">
                Register now & get you 10% <br />
                offer from first order!
              </p>
              <p className="text-white p-1 font-semibold">Join US</p>
            </div>

            <div className="flex flex-row space-x-4">
              <div className="h-8 group">
                <a href="#">
                  <FacebookIcon />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <TwitterIcon />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <PinterestIcon />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 mr-3 hidden md:block">
            <div className="justify-start">
              <p className="text-white p-1 font-semibold">Company</p>
              <p className="text-white p-1 text-sm">about us</p>
              <p className="text-white p-1 text-sm">Carrer</p>
              <p className="text-white p-1 text-sm">Contact Us</p>
              <p className="text-white p-1 text-sm">Start Selling</p>
              <p className="text-white p-1 text-sm">Order History</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 hidden md:block">
            <div className="justify-start">
              <p className="text-white p-1 font-semibold">My Account</p>
              <p className="text-white p-1 text-sm">Track My Order</p>
              <p className="text-white p-1 text-sm">View Cart</p>
              <p className="text-white p-1 text-sm">Sign In</p>
              <p className="text-white p-1 text-sm">Help</p>
              <p className="text-white p-1 text-sm">Wishlist</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 hidden md:block">
            <div className="justify-start">
              <p className="text-white p-1 font-semibold">Customer Service</p>
              <p className="text-white p-1 text-sm">Payment Method</p>
              <p className="text-white p-1 text-sm">Money Return Policy</p>
              <p className="text-white p-1 text-sm">Product Return</p>
              <p className="text-white p-1 text-sm">Contact Seller</p>
              <p className="text-white p-1 text-sm">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
