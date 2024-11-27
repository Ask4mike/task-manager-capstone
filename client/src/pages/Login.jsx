import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Lottie from "../assets/images/Lottie-Task.gif";
import Textbox from "../components/Textbox";
import Button from "../components/Button";

export default function Login() {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    console.log("form submitted successfully", data);
  };
  const navigate = useNavigate();
  useEffect(() => {
    user && navigate("/dashboard");
  }, [navigate, user]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full my-20 md:w-auto flex gap-0 md:gap-40 flex-col lg:flex-row items-center justify-center">
        {/* Left Side  */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center md:mt-40">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600 shadow-sm">
              Manage all your tasks in one place!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-center items-center justify-center text-4xl md:text-6xl 2xl:text-7xl font-bold text-blue-700">
              <span>TaskMaster</span>
              <span>Hub</span>
              <img
                src={Lottie}
                alt="This a lottie animation"
                className="w-40 md:w-60 object-cover"
              />
            </p>
          </div>
        </div>

        {/* Right Side with Form*/}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[600px] flex flex-col bg-white gap-y-8 px-10 py-14"
          >
            <div>
              <p className="text-blue-700 text-2xl text-center font-bold">
                Welcome Back!!
              </p>
              <p className="text-base text-gray-700 text-center">
                Keep all your credentials safe!
              </p>

              <div className="flex flex-col gap-y-5 mt-6">
                <Textbox
                  placeholder="email@example.com"
                  label="Input your email address"
                  type="email"
                  name="email"
                  className="w-full rounded-full"
                  register={register("email", {
                    required: "Email is required!",
                  })}
                  error={errors.email ? errors.email.message : ""}
                />
                <Textbox
                  placeholder="password"
                  label="Input your selected password"
                  type="password"
                  name="password"
                  className="w-full rounded-full"
                  register={register("password", {
                    required: "Password is required!",
                  })}
                  error={errors.password ? errors.password.message : ""}
                />

                <span className="text-sm text-gray-600 hover:text-blue-700 hover:cursor-pointer hover:underline text-right mr-2">
                  Forget password?
                </span>

                <Button
                 type="Login"
                 label="Login"
                 className="w-full h-full font-bold bg-blue-700 text-white rounded-full hover:opacity-90"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
