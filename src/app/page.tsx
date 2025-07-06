import Advertise from "./components/Advertise";
import Body from "./components/body/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProfileSidebar from "./components/ProfileSidebar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex p-4">
        <ProfileSidebar />
        <Body />
        <Advertise />
      </div>
      <Footer />
    </div>
  );
}
