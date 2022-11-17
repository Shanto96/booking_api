import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const userNameRef = useRef();
  const emailRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value === password2Ref.current.value) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "kibriaUpload");
      data.append("api_key", `${process.env.REACT_APP_CLOUD}`);
      let info = {
        username: userNameRef?.current?.value,
        email: emailRef?.current?.value,
        country: countryRef?.current?.value,
        city: cityRef?.current?.value,
        phone: phoneRef?.current?.value,
        password: passwordRef?.current?.value,
        img: "",
      };
      try {
        const id = toast.loading("User is Creating");
        const imgRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dvwcs0jga/image/upload",
          data
        );

        info.img = imgRes?.data?.url;
        const res = await axios.post("/auth", info);
        toast.update(id, {
          render: "New user Created",
          type: "success",
          isLoading: false,
          autoClose: 7000,
        });

        userNameRef.current.value = "";
        emailRef.current.value = "";
        countryRef.current.value = "";
        cityRef.current.value = "";
        phoneRef.current.value = "";
        passwordRef.current.value = "";
        password2Ref.current.value = "";
        setFile("");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.warn("Password didn't matched ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  required
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label> Username</label>
                <input
                  type="text"
                  placeholder="User Name"
                  required
                  ref={userNameRef}
                />
              </div>
              <div className="formInput">
                <label> Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="formInput">
                <label> Country</label>
                <input type="text" placeholder="Country" ref={countryRef} />
              </div>
              <div className="formInput">
                <label> City</label>
                <input type="text" placeholder="City" ref={cityRef} />
              </div>
              <div className="formInput">
                <label> Phone</label>
                <input type="text" placeholder="Phone" ref={phoneRef} />
              </div>{" "}
              <div className="formInput">
                <label> Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>{" "}
              <div className="formInput">
                <label>Re Enter Password</label>
                <input
                  type="password"
                  placeholder="Password Again"
                  required
                  ref={password2Ref}
                />
              </div>{" "}
              <button onClick={(e) => handleClick(e)}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
