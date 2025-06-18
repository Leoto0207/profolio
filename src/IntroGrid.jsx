import Grid from "@mui/material/Grid";
import ProfileImg from "./ProfileImg";
import SelfIntro from "./SelfIntro";
import Title from "./Title";

const selfIntro =
  "I am currently studying Master of Information Technology at \
            Queensland University of Technology and have gained for over 2 years \
            front-end and back-end web development experience. I have also  \
            completed CS50 Computer Science Courses and Programs from Harvard. \
            My web developemnt knowledge and skills would significantly contribute \
            to your company.";

function IntroGrid() {
  return (
    <Grid
      container
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        marginY: "100px",
        px: 10,
      }}
    >
      <Grid size={{ sx: 12, md: 6 }}>
        <ProfileImg></ProfileImg>
      </Grid>
      <Grid size={{ sx: 12, md: 6 }}>
        <SelfIntro selfIntro={selfIntro}></SelfIntro>
      </Grid>
    </Grid>
  );
}

export default IntroGrid;
