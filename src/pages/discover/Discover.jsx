import { useEffect, lazy, Suspense } from "react";
const Loader = lazy(() => import("../../components/Loader/Loader"));
// const Vision = lazy(() => import("./Vision"));
const WhoWeAre = lazy(() => import("./WhoWeAre"));
const Keepgrowing = lazy(() => import("./kg"));
import { useLocation } from "react-router-dom";

const Discover = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="bg-white dark:bg-black">
      <Suspense fallback={<Loader />}>
        <WhoWeAre />
        <Keepgrowing />
        {/* <Vision /> */}
      </Suspense>
    </div>
  );
};

export default Discover;
