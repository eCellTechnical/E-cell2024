import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed  w-full h-[100vh] flex justify-center items-center min-h-screen z-[99] bg-white dark:bg-black">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
