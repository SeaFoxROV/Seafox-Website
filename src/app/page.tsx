import Team from "./components/Team";
import Landing from "./components/Landing";
import Rov from "./components/Rov";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
    <main className="">
      <Navbar/>
      <Landing/>
      <Rov/>
      <Team/>
    </main>
    
    </div>
  );
}
