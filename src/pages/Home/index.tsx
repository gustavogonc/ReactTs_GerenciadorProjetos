import { Projects } from "../../components/Projects";
import Sidebar from "../../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar>
        <div>
          <Projects />
        </div>
      </Sidebar>
    </div>
  );
}
