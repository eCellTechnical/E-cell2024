import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function EditUser() {
  const { register, handleSubmit, setValue } = useForm();
  const [user, setUser] = useState();
  const [editedEmail, setEditedEmail] = useState("");
  const [editedUsername, setEditedUsername] = useState("");
  const [searchBy, setSearchBy] = useState(2);
  const [disable, setDisable] = useState(false);

  const submit = async (data) => {
    setDisable(true);
    try {
      if (data.email.length !== 0) {
        const response = await axios.post(
          `https://e-cell2024backend-production.up.railway.app/admin/find-user-by-email`,
          { email: data.email }
        );

        if (response.data.msg == "Exists") {
          setUser(response.data.user);
          setEditedEmail(response.data.user.email);
          setEditedUsername(response.data.user.userName);
        } else {
          alert("User Not Exists");
        }
      } else if (data.userId.length !== 0) {
        const response = await axios.post(
          `https://e-cell2024backend-production.up.railway.app/admin/find-user-by-userid`,
          { userId: data.userId }
        );

        if (response.data.msg == "Exists") {
          setUser(response.data.user);
          setEditedEmail(response.data.user.email);
          setEditedUsername(response.data.user.userName);
        } else {
          alert("User Not Exists");
        }
      }
    } catch (e) {
      console.error("Error fetching User :(");
    }
    setDisable(false);
  };

  const editsubmit = async (data2) => {
    setDisable(true);
    if (user.userName == data2.username && user.email == data2.useremail) {
      // console.log(user.userName, data2.username);
      alert("No change to make");
    } else {
      try {
        const response = await axios.patch(
          `https://e-cell2024backend-production.up.railway.app/admin/edit-user`,
          { userName: data2.username, email: data2.useremail, id: user._id }
        );
        alert(response.data);
        setSearchBy(2);
        setUser();
        setValue("email", "");
        setValue("userId", "");
        setEditedEmail("");
        setEditedUsername("");
      } catch (error) {
        console.error("Error fetching User :(");
      }
    }
    setDisable(false);
  };

  // Inside your functional component
  useEffect(() => {
    if (user) {
      setValue("useremail", editedEmail);
      setValue("username", editedUsername);
    }
  }, [user, editedEmail, editedUsername, setValue]);

  return (
    <div className="w-full flex flex-col  items-center">
      <h1 className="font-bold text-4xl underline mb-8">Edit User</h1>
      <div className="flex flex-col w-[60%] justify-center items-center">
        <h1 className="font-bold text-2xl mb-3">Search By</h1>
        <div className="flex justify-around w-full">
          <button
            onClick={() => {
              setSearchBy(0);
              setValue("userId", "");
              setUser();
            }}
            className="z-10 px-3 py-2 bg-blue-300 mt-3 rounded-lg font-semibold w-[40%] "
          >
            Email
          </button>
          <button
            onClick={() => {
              setSearchBy(1);
              setValue("email", "");
              setUser();
            }}
            className="px-3 py-2 z-10 bg-blue-300 mt-3 rounded-lg font-semibold w-[40%]"
          >
            UserId
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[60%] mt-4 flex flex-col justify-center items-center"
      >
        {searchBy !== 2 &&
          (searchBy == 0 ? (
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="font-semibold text-gray-700">
                User Email:
              </label>
              <input
                className="bg-transparent font-semibold border-2 border-black rounded-lg p-2 focus:outline-none"
                type="email"
                name="email"
                id="email"
                {...register("email")}
              />
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <label htmlFor="userId" className="font-semibold text-gray-700">
                User UserId:
              </label>
              <input
                className="bg-transparent font-semibold border-2 border-black rounded-lg p-2 focus:outline-none"
                type="text"
                name="userId"
                id="userId"
                {...register("userId")}
              />
            </div>
          ))}

        <button
          className={`${
            searchBy == 2 && "hidden"
          } flex px-3 py-2 bg-blue-300 mt-3 rounded-lg font-semibold disabled:bg-blue-100 z-10`}
          type="submit"
          disabled={disable}
        >
          Find User
        </button>
      </form>

      {user && (
        <div className="flex flex-col w-[60%] justify-center items-center mt-4">
          <form
            onSubmit={handleSubmit(editsubmit)}
            className="flex flex-col justify-center items-center w-full"
          >
            <div className="flex flex-col w-full">
              <label
                htmlFor="useremail"
                className="font-semibold text-gray-700"
              >
                User Email:
              </label>
              <input
                className="bg-transparent font-semibold border-2 border-black rounded-lg p-2 focus:outline-none"
                type="text"
                name="useremail"
                id="useremail"
                {...register("useremail")}
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full mt-2 mb-2">
              <label htmlFor="username" className="font-semibold text-gray-700">
                User Username:
              </label>
              <input
                className="bg-transparent font-semibold border-2 border-black rounded-lg p-2 focus:outline-none"
                type="text"
                name="username"
                id="username"
                {...register("username")}
                value={editedUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="px-3 py-2 bg-blue-300 mt-3 rounded-lg font-semibold disabled:bg-blue-100 z-10"
              disabled={disable}
            >
              Edit User
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EditUser;
