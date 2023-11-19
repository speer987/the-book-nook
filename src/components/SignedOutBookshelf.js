import { SignIn } from "../services/AuthServices";
export default function SignedOutBookshelf() {
  return (
    <div className="p-7 pt-0 text-lg font-body">
      <p className="text-lg text-teal-900">
        Please sign in for this functionality:
      </p>
      <div className="pt-2 flex text-lg text-slate-100 text-center">
        <SignIn />
      </div>
    </div>
  );
}
