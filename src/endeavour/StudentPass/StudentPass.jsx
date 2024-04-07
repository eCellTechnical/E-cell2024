import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function StudentPass() {
  const [stdPass, setStdPass] = useState([]);
  async function submit() {
    try {
      await axios
        .post(
          `https://e-cell2024backend-production.up.railway.app/studentpass`,
          {}
        )
        .then((res) => {
          if (res.data) {
            setStdPass(res.data);
          } else {
            alert("Wrong Username or Password");
          }
        })
        .catch((e) => {
          alert("wrong details");
          // console.log(e);
        });
    } catch (error) {
      // console.log(error);
      alert("Internal server error");
    }
  }
  useEffect(() => {
    submit();
  }, []);
  return (
    <div className="pt-[13vh] text-white">
      <h1>Student Pass</h1>

      {stdPass.map((pass, index) => (
        <div key={index}>
          <h1>{pass.stdPassDes}</h1>
        </div>
      ))}
    </div>
  );
}

export default StudentPass;
