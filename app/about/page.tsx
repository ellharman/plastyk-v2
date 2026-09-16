import Nav from "../_common/Nav";
import Footage from "./Footage";

export default function About() {
  return (
    <main className="flex flex-col gap-8 pt-8">
      <Nav />
      <div className="flex flex-col container md:w-2/3 px-8 pb-12 gap-8 mx-auto">
        <Footage />
      </div>
    </main>
  );
}
