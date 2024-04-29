// import "./card.css";
// import image from "../../assets/EVENTCARD SPRINTHACKS.jpg";

const Card = () => {
  const ContentCreators = [
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399099/gvcmbqvda5xhqjax99xa.jpg",
      Title: "Jahnvi Singh",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399101/w5zuousqw37eh3uapnwu.jpg",
      Title: "Nikita Jindal",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399099/wkcgyo6sydgpnmzazuio.jpg",
      Title: "Aniket Dhiman",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },

    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399101/haew8n9dlwhtf3lbmwhh.jpg",
      Title: "Samaakshi Jha",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
  ];
  const keyNote = [
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399101/xhywkzshtyonv94okg91.jpg",
      Title: "Prince Gupta",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399100/r5sn6l7dzyi2yutnms55.jpg",
      Title: "Sachin Saxena",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399099/tihpfkowdtrvz0katf1c.jpg",
      Title: "Major Pawan Kumar",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399099/grbuaev0crdudfp76xqq.jpg",
      Title: "Ankit Aggarwal",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
  ];
  const Authors = [
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399099/zy2km7ydke9jkxmzmpem.jpg",
      Title: "Jitender Girdhar",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399101/r0lfyq4cwogh9bcrui1z.jpg",
      Title: "Priyaranjan Kumar",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399100/iiohvzpgqsd3mlhqzkwv.jpg",
      Title: "Manik Sehgal",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
  ];

  const CardsData = [
    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399101/myw7jnyaaqasjeuae3ws.jpg",
      Title: "Shivam Ahuja",
      Description: "24 Hours Hackathon",
      Link: "https://www.sprinthacks.in/",
      BtnData: "Register",
    },

    {
      src: "https://res.cloudinary.com/dt2eectnb/image/upload/v1714399099/laiplbcz0g9woj5qiapk.jpg",
      Title: "Yash Rathi",
      Description: "Coming Soon",
      Link: "",
      BtnData: "On Devfolio",
    },
  ];
  return (
    <>
      <center>
        <h1 className="text-[2rem]">Keynote Speakers</h1>
      </center>
      <div className="flex flex-wrap justify-center items-center">
        {keyNote.map((item, index) => (
          <article
            key={index}
            className="relative w-[calc(33.33% - 20px)] md:w-[calc(33.33% - 30px)] lg:w-[calc(33.33% - 40px)] flex flex-wrap justify-center leading-loose my-10 mx-5 md:mx-10 lg:mx-20"
            data-aos="fade-up"
          >
            <img src={item.src} alt="image" className="w-full rounded-3xl" />
          </article>
        ))}
      </div>
      <center>
        <h1 className="my-10 text-[2rem]">Authorpreneurs Board</h1>
      </center>
      <div className="flex flex-wrap justify-center items-center">
        {Authors.map((item, index) => (
          <article
            key={index}
            className="relative w-[calc(33.33% - 20px)] md:w-[calc(33.33% - 30px)] lg:w-[calc(33.33% - 40px)] flex flex-wrap justify-center leading-loose my-10 mx-5 md:mx-10 lg:mx-20"
            data-aos="fade-up"
          >
            <img src={item.src} alt="image" className="w-full rounded-3xl" />
          </article>
        ))}
      </div>
      <center>
        <h1 className="my-10 text-[2rem]a">Eve Artists</h1>
      </center>
      <div className="flex flex-wrap justify-center items-center">
        {CardsData.map((item, index) => (
          <article
            key={index}
            className="relative w-[calc(33.33% - 20px)] md:w-[calc(33.33% - 30px)] lg:w-[calc(33.33% - 40px)] flex flex-wrap justify-center leading-loose my-10 mx-5 md:mx-10 lg:mx-20"
            data-aos="fade-up"
          >
            <img src={item.src} alt="image" className="w-full rounded-3xl" />
          </article>
        ))}
      </div>
      <center>
        <h1 className="my-10 text-[2rem]">Content Creators</h1>
      </center>
      <div className="flex flex-wrap justify-center items-center">
        {ContentCreators.map((item, index) => (
          <article
            key={index}
            className="relative w-[calc(33.33% - 20px)] md:w-[calc(33.33% - 30px)] lg:w-[calc(33.33% - 40px)] flex flex-wrap justify-center leading-loose my-10 mx-5 md:mx-10 lg:mx-20"
            data-aos="fade-up"
          >
            <img src={item.src} alt="image" className="w-full rounded-3xl" />
          </article>
        ))}
      </div>
    </>
  );
};

export default Card;
