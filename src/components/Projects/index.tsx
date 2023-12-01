import { Button } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export function Projects() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: "2%",
        }}
      >
        <h1>Projetos</h1>
        <Button variant="contained">
          <AddOutlinedIcon />
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> <ProjectCard />
      </div>
    </div>
  );
}
