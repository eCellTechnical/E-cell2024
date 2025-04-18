import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/theme";
import { Analytics } from "@vercel/analytics/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./IdeateX/Register";
// Lazy-loaded components
import RegisterEvent from "./endeavour/Profile/RegisteredEvent"
const Loader = React.lazy(() => import("./components/Loader/Loader"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const IdeateX = React.lazy(() => import("./IdeateX/index"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Discover = React.lazy(() => import("./pages/discover/Discover"));
const OurTeam = React.lazy(() => import("./pages/OurTeam/OurTeam"));
const PastSpeakers = React.lazy(() => import("./pages/speakers/PastSpeakers"));
const OurInitiatives = React.lazy(() =>
  import("./pages/OurInitiatives/OurInitiatives")
);
const Gallery = React.lazy(() => import("./pages/Gallery/Gallery"));
const Associations = React.lazy(() =>
  import("./pages/Associations/Associations")
);
const ContactUs = React.lazy(() => import("./pages/ContactUs/ContactUs"));
const IdeaSubmissions = React.lazy(() =>
  import("./pages/IdeaSubmissions/IdeaSubmissions")
);
const Footer = React.lazy(() => import("./components/footer/Footer"));

// const EndeavourEvent = React.lazy(() =>
//   import("./endeavour/End25/singleEvent")
// );
// const ComingSoon = React.lazy(() =>
//   import("./endeavour/CommingSoon/CommingSoon")
// );

// const Certificate = React.lazy(() =>
//   import("./components/certificate/Certificate")
// );

// const Eve = React.lazy(() => import("./components/home_page/home"));

const EndeavourHomePage = React.lazy(() =>
  import("./endeavour/Home/EndeavourHomePage")
);

const End25Eve = React.lazy(() =>
  import("./endeavour/Eve25/Eve25")
);

const EndeavourLogin = React.lazy(() =>
  import("./endeavour/Login/EndeavourLogin")
);
const VerifyOtp  = React.lazy(() =>
  import("./endeavour/Register/OtpVerify")
);
const ForgetPassword = React.lazy(() =>
  import("./endeavour/Login/ForgetPassword/ForgetPassword")
);
const ResetPassword = React.lazy(() =>
  import("./endeavour/Login/ResetPassword/ResetPassword")
);
const EndeavourRegister = React.lazy(() =>
  import("./endeavour/Register/EndeavourRegister")
);

const RegisterEventForm = React.lazy(() =>
  import("./endeavour/End25/RegisterEventForm")
);

const EndEventPage = React.lazy(() =>
  import("./endeavour/End25/EventPage")
);

// const StudentPass = React.lazy(() =>
//   import("./endeavour/StudentPass/StudentPass")
// );
// const AllEvents = React.lazy(() =>
//   import("./endeavour/Events/AllEvents/AllEvents")
// );
// const Sponsors = React.lazy(() => import("./endeavour/Sponsors/Sponsors"));
// const Speakers = React.lazy(() => import("./endeavour/Speakers/Organiser"));
// const SpecificEvent = React.lazy(() =>
//   import("./endeavour/Events/SpecificEvent/MemoizedSpecificEvent")
// );
const Profile = React.lazy(() =>
  import("./endeavour/Profile/NewEndProfile")
);

const SingleEvent = React.lazy(() =>
  import("./endeavour/End25/singleEvent")
);

const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy/Policy"));
// const Admin = React.lazy(() => import("./endeavour/Admin/EndeavourAdmin"));
// import SuperAdmin from "./endeavour/Admin/SuperAdmin/SuperAdmin";
const Error404 = React.lazy(() => import("./pages/ErrorPage/Error404"));

import Aos from "aos";
import "aos/dist/aos.css";
import RecruitmentResult from "./components/RecruitmentResult/RecruitmentResult";
import PrivacyPolicy2 from "./pages/PrivacyPolicy/Policy2";
// import CommingSoon from "./endeavour/CommingSoon/CommingSoon";
// import NewCerti from "./components/newCerti/NewCerti";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("theme", "light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("theme", "dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    if (localStorage.getItem("theme")) {
      setThemeMode(localStorage.getItem("theme"));
      document.querySelector("html").classList.add(themeMode);
    } else {
      localStorage.setItem("theme", themeMode);
      document.querySelector("html").classList.add(themeMode);
    }
  }, [themeMode]);

  useEffect(() => {
    Aos.init({
      duration: 800,
      // offset: 50,
      delay: 50,
      easing: "ease",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Router>
        <Analytics />
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
          <Navbar />
          <ToastContainer />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/ourteam" element={<OurTeam />} />
              <Route path="/pastspeakers" element={<PastSpeakers />} />
              <Route path="/events" element={<OurInitiatives />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/associations" element={<Associations />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/ideasubmissions" element={<IdeaSubmissions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy2 />} />
              <Route
                path="/recruitment-result-2025"
                element={<RecruitmentResult />}
              />

              {/* <Route path="/ideatex-certificate" element={<NewCerti />} /> */}
              <Route path="/ideatex" element={<IdeateX />} />
              <Route path="/ideatex/register" element={<Register />} />
              {/* <Route path="/endeavour" element={<ComingSoon />} /> */}
              
              {/* <Route path="/endeavour/event/" element={<EndeavourEvent />} /> */}

              {/* <Route path="/endeavour/eve" element={<Eve />} /> */}





              {/* Important  */}
            <Route path="/endeavour" element={<EndeavourHomePage />} />
            <Route path="/endeavour/eve" element={<End25Eve />} />

             <Route path="/endeavour/login" element={<EndeavourLogin />} />
              <Route
                path="/endeavour/forget-password"
                element={<ForgetPassword />}
              />
              <Route
                path="/endeavour/events"
                element={<EndEventPage />}
              />
              <Route
                path="/endeavour/reset-password/"
                element={<ResetPassword />}
              />
              <Route
                path="/endeavour/register-event/"
                element={<RegisterEvent />}
              />
              <Route
                path="/endeavour/verify-otp"
                element={<VerifyOtp />}
              />
              <Route
                path="endeavour/register"
                element={<EndeavourRegister />}
              />
              <Route path="/endeavour/:userId" element={<Profile />} />
              <Route path="/endeavour/events/:eventSlug" element={<SingleEvent />} />
              <Route path="/endeavour/events/register/:eventSlug" element={<RegisterEventForm />} />
              

              {/* <Route path="/endeavour/admin/:admin" element={<Admin />} /> */}
              {/* <Route
                path="/endeavour/super-admin/:superAdmin"
                element={<SuperAdmin />}
              />
              
              <Route path="/endeavour/studentpass" element={<StudentPass />} />
              <Route path="/endeavour/events" element={<AllEvents />} /> */}
              
              {/* <Route
                path="/endeavour/events/:eventId"
                element={<SpecificEvent />}
              />
              <Route path="/endeavour/sponsors" element={<Sponsors />} />
              <Route path="/endeavour/speakers" element={<Speakers />} />  */}
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;