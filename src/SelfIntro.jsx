import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Title from "./Title";
import "./App.css";
export default function SelfIntro({ selfIntro = "" }) {
  return (
    <Box className="fade_in" sx={{ p: 1, textAlign: "center" }}>
      <Grid
        container
        spacing={3}
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid size="12">
          <Typography variant="h3" component="name">
            Hi, This is <span class="username">Leo To</span>
            {/* <Typography
              variant="h3"
              sx={{
                backgroundImage: "linear-gradient(red, blue)",
                color: "transparent",
                backgroundClip: "text",
              }}
            >
              Leo To
            </Typography> */}
          </Typography>
        </Grid>
        <Grid size="12">
          <Typography
            variant="h5"
            component="description"
            sx={{ letterSpacing: 2, lineHeight: 1.5 }}
          >
            {selfIntro}
          </Typography>
        </Grid>
        <Grid size={{ sx: 4 }}>
          <LocationOnTwoToneIcon style={{ fontSize: "2rem" }} />
          <Typography variant="h6" component="description">
            Brisbane
          </Typography>
        </Grid>
        <Grid size={{ sx: 4 }}>
          <a
            href="https://www.linkedin.com/in/ka-kin-to-968698112"
            alt="profile"
            target="_blank"
          >
            <LinkedInIcon style={{ fontSize: "2rem" }} />
            <Typography variant="h6" component="description">
              Ka Kin (Leo) To
            </Typography>
          </a>
        </Grid>
        <Grid size={{ sx: 4 }}>
          <a
            href="https://github.com/Leoto0207"
            alt="github-LeoTo"
            target="_blank"
          >
            <GitHubIcon style={{ fontSize: "2rem" }} />
            <Typography variant="h6" component="description">
              Leoto0207
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}
