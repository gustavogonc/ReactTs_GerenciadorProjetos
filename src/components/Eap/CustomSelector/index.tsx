import { Box } from "@mui/material";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import TextFieldsIcon from "@mui/icons-material/TextFields";

export function CustomSelector() {
  return (
    <Box
      sx={{
        borderRadius: "4px",
        backgroundColor: "#f4f4f4",
        padding: "16px",
        boxShadow:
          " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TouchAppIcon
        sx={{
          "marginBottom": "80%",
          "color": "#0471a6",
          "&:hover": { backgroundColor: "#fff" },
        }}
      />
      <CropSquareIcon sx={{ marginBottom: "80%" }} />
      <TextFieldsIcon sx={{ marginBottom: "80%" }} />
      <TouchAppIcon sx={{ marginBottom: "80%" }} />
    </Box>
  );
}
