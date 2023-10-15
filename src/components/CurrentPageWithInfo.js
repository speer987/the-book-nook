import Subtitle from "./Subtitle";
export default function CurrentPageWithInfo({ page, info }) {
  return (
    <div>
      <div class="text-2xl font-title text-teal-900 font-medium">{page}</div>
      <Subtitle message={info} />
    </div>
  );
}
