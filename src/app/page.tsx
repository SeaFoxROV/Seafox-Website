import Team from "./components/Team";
import Landing from "./components/Landing";
import Rov from "./components/Rov";
import Head from 'next/head';


export default function Home() {
  return (
    <div>
    <main className="">
     <Landing/>
     <Team/>
     <Rov/>
    </main>
    
    </div>
  );
}
