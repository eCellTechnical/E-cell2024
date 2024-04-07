import "./Error404.css";
import { useNavigate } from "react-router-dom";
function Error404() {
  const history = useNavigate();
  return (
    <section className="page_404 flex justify-center items-center pt-[13vh] h-[100vh] bg-white dark:bg-black">
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center flex justify-center items-center flex-col">
              <div className="four_zero_four_bg text-black ">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404text-black ">
                <h3 className="h2">Look like you&apos;re lost</h3>

                <p>the page you are looking for not avaible!</p>

                <a
                  onClick={() => history("/")}
                  className="link_404 cursor-pointer"
                >
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error404;
