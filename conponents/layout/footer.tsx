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
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/** Logo */}

            <LogoSite />
          </div>

          {/** Social & Copy Container */}
          <div className="flex flex-col items-start justify-between p-2 space-y-4 text-gray-500">
            {/** icons Container */}
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {/** Icon 1 */}
              <div className="h-8 group">
                <a href="#">
                  {/* <Image src={<FacebookIcon/>} alt="" className="h-6" /> */}
                  <FacebookIcon />
                </a>
              </div>
              {/** Icon 2 */}
              <div className="h-8 group">
                <a href="#">
                  <TwitterIcon />
                </a>
              </div>
              {/** Icon 3 */}
              <div className="h-8 group">
                <a href="#">
                  <PinterestIcon />
                </a>
              </div>
              {/** Icon 4 */}
              <div className="h-8 group">
                <a href="#">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            {/** Copy */}
            <div className="font-bold">
              &copy; 2024 Nibaron Kumar Das. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
