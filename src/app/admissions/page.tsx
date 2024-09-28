import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex bg-background items-center justify-center h-screen ">
        <Navbar />

        <div className="text-center align-middle ">
          <p className="dark:text-neutral-200 text-neutral-800 text-3xl">
            UNDER DEVELOPMENT{" "}
          </p>
        </div>
      </div>
    </>
  );
}
