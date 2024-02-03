import Team from "./components/Team";
import Landing from "./components/landing";
import Rov from "./components/Rov";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Landing/>
     <Team/>
     <Rov/>
    </main>
  );
}
