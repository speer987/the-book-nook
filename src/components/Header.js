import { Link, useNavigate } from "react-router-dom";
import { SignIn, SignOut, useAuthentication } from "../services/AuthServices";
export default function Header({ setPage }) {
  const user = useAuthentication();
  return (
    <header class="flex justify-between bg-teal-900 text-slate-50">
      <Link
        className="p-0 m-0 hover:text-teal-200 transition ease-in-out duration-200"
        to={"../"}
      >
        <div class="text-3xl font-title p-6 pt-7 font-semibold">
          The Book Nook
        </div>
      </Link>
      <div class="flex justify-stretch text-slate-50 text-lg">
        <Link
          class="rounded-lg hover:bg-teal-800 transition duration-500 ease-in-out font-body m-5 p-3"
          to={"../explore"}
        >
          Explore
        </Link>
        <Link
          class="rounded-lg hover:bg-teal-800 transition duration-500 ease-in-out font-body m-5 p-3"
          to={"../search"}
        >
          Search
        </Link>
        <Link
          class="rounded-lg hover:bg-teal-800 transition duration-500 ease-in-out font-body m-5 p-3"
          to={"../bookshelf"}
        >
          Bookshelf
        </Link>
        {/* <Link
          class="focus:bg-teal-200 active:bg-teal-100 focus:text-teal-900 rounded-lg hover:bg-teal-800 transition duration-500 ease-in-out font-body m-5 p-3"
          to={"../reading-log"}
        >
          Reading Log
        </Link> */}
      </div>
      <div className="p-4">{!user ? <SignIn /> : <SignOut />}</div>
    </header>
  );
}
