import "@fontsource/roboto/400.css";
import Typography from "@mui/material/Typography";

const titles = ["Introduction", "Skills", "Work Experience"];

function Title({ title }) {
  let theTitle =
    title == "a" ? titles[0] : title == "b" ? titles[1] : titles[2];

  return (
    <div>
      <Typography variant="h2" component="h2">
        {theTitle}
      </Typography>
    </div>
  );
}

export default Title;
