import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="w-full h-screen bg-blend-darken bg-hero-pattern bg-cover bg-center flex justify-center ">
      <div className="rounded-lg shadow-2xl bg-white flex basis-1/4 my-10 ">
        <form className="py-6 px-10 flex flex-1 items-stretch flex-col justify-start pt-32">
          <h5 className="font-sans text-gray-900 text-2xl font-bold self-center mb-7 ">
            Sign in
          </h5>
          <input
            className="my-2 shadow-2xl  p-4 rounded-xl focus:outline-none transition ease-in-out focus:shadow-xl placeholder: font-bold "
            placeholder="username or email"
            type={"email"}
          ></input>
          <input
            className="my-2 shadow-2xl p-4 rounded-xl focus:outline-none transition ease-in-out focus:shadow-xl placeholder: font-bold "
            placeholder="password"
            type={"password"}
          ></input>
          <button className="shadow-xl shadow-shadow my-6 self-center px-14 p-3 rounded-full transition ease-in-out font-bold hover:bg-primaryDark bg-primary ">
            <span className="text-white">Sign in</span>
          </button>
          <p className="my-6 text-gray-400 self-center">or login with</p>
          <div className="flex self-center flex-row ">
            <div className="hover:shadow-xl mx-2 rounded-full shadow-lg p-2">
              <FontAwesomeIcon size="xl" icon={faFacebook} />
            </div>
            <div className="hover:shadow-xl mx-2 rounded-full shadow-lg p-2">
              <FontAwesomeIcon size="xl" icon={faGoogle} />
            </div>
          </div>
          <a className="self-center" href="/">
            <p className="hover:border-b-2 my-6 text-black self-center">
              Sign Up
            </p>
          </a>
        </form>
      </div>
    </div>
  );
}
