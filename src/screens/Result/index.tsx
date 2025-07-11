import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const proteinBenefits = [
  {
    icon: "https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/Group+1000001814.png",
    text: "Stronger Muscles",
  },
  {
    icon: "https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/Group+1000001815.png",
    text: "Better Energy",
  },
  {
    icon: "https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/Group+1000001816.png",
    text: "Longer Satiation",
  },
  {
    icon: "https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/Group+1000001817.png",
    text: "More Daily Strength",
  },
];

const deliveryApps = [
  {
    logo: "https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/instamart+logo.png",
    alt: "Instamart logo",
    className: "w-[39px] h-[39px]",
  },
  {
    logo: "https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/Rectangle+(1).png",
    alt: "Blinkit logo png",
    className: "w-[42px] h-[42px] ml-4",
  },
  {
    logo: "https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/zepto-logo-app-icon.png.png",
    alt: "Zepto logo app icon",
    className: "w-[42px] h-[42px] ml-4",
  },
];

const ProteinBenefits = () => (
  <section className="w-full">
    <h2 className="text-[#0a244d] text-center font-[helvetica] text-4xl font-black tracking-[-1.08px] leading-[110%]">
      Protein gives you
    </h2>
    <div className="mt-4 flex flex-col items-start justify-center ml-14">
      {proteinBenefits.map((benefit, index) => (
        <div key={index} className="flex items-center mb-[10px] justify-start">
          <div className="w-[43px] h-[43px] bg-[#0a244d] rounded-[21.5px] flex items-center justify-center">
            <img
              className="w-auto h-auto"
              alt={`${benefit.text} icon`}
              src={benefit.icon}
            />
          </div>
          <span className="ml-[9px] font-[helvetica] text-[#0a244d] text-[23px] font-normal tracking-[-0.69px] leading-[110%]">
            {benefit.text}
          </span>
        </div>
      ))}
    </div>
  </section>
);

const ProductPromotion = () => (
  <section className="w-full flex flex-col items-center mt-4">
    <h3
      style={{
        color: "#0A244D",
        textAlign: "center",
        fontFamily: "helvetica",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "900",
        lineHeight: "110%" /* 26.4px */,
        letterSpacing: "-0.72px",
      }}
      className="text-[#0a244d] text-2xl text-center tracking-[-0.72px] leading-[110%] font-[helvetica]"
    >
      Meet your Protein Goals <br /> with Milky Mist
    </h3>
    <img
      className="w-[211px] h-[211px]"
      alt="Milky Mist Yogurt Product"
      src="https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/Rectangle+(2).png"
    />
  </section>
);

const AvailableOn = () => (
  <footer className="w-full flex flex-col items-center">
    <p className="font-[helvetica] font-light text-black text-lg text-center tracking-[-0.54px] leading-[110%]">
      Available On
    </p>
    <div className="flex items-center mt-[6px]">
      {deliveryApps.map((app, index) => (
        <img
          key={index}
          className={`${app.className} object-cover`}
          alt={app.alt}
          src={app.logo}
        />
      ))}
    </div>
  </footer>
);

export const FinalYogurt = (): JSX.Element => (
  <main
    className="bg-white flex flex-row justify-center w-full"
    data-model-id="474:2619"
  >
    <div className="bg-white w-[390px] relative">
      <header className="w-full h-[120px] relative">
        <img
          className="w-[171px] h-[106px] absolute left-1/2 -translate-x-1/2 object-cover"
          alt="Power of Protein"
          src="/img/image-15.png"
        />
      </header>
      <div className="flex flex-col items-center">
        <ProteinBenefits />
        <ProductPromotion />
        <AvailableOn />
      </div>
    </div>
  </main>
);
