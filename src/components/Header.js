import { Link } from "react-router-dom";

export default function Header({ setPage }) {
  return (
    <header class="flex justify-between bg-teal-900 text-slate-50">
      <div class="text-3xl font-title p-6 pt-7 font-semibold">
        The Book Nook
      </div>
      <div class="flex justify-stretch text-slate-50 text-lg">
        <Link
          class="active:ring-teal-300 transition duration-500 ease-in-out rounded-lg hover:bg-teal-800 font-body m-5 p-3"
          to={"../explore"}
        >
          Explore
        </Link>
        <Link
          class="active:ring-teal-300 transition duration-500 ease-in-out rounded-lg hover:bg-teal-800 font-body m-5 p-3"
          to={"../search"}
        >
          Search
        </Link>
        <Link
          class="active:ring-teal-300 transition duration-500 ease-in-out rounded-lg hover:bg-teal-800 font-body m-5 p-3"
          to={"../bookshelf"}
        >
          Bookshelf
        </Link>
        <Link
          class="active:ring-teal-300 transition duration-500 ease-in-out rounded-lg hover:bg-teal-800 font-body m-5 p-3"
          to={"../reading-log"}
        >
          Reading Log
        </Link>
      </div>
      <div>User Image Goes Here</div>
    </header>
  );
}
