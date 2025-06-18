import Title from "./Title";
import { Box, Container, Grid } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import HandymanIcon from "@mui/icons-material/Handyman";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CardComponent from "./CardComponent";

const CardTitle = ["Work Experience", "Tools", "Documentation"];
const CardDescription = [
  "2+ years web development of out-source and in-house project. The project was mainly front-end development in e-tax system and full-stack development in export crdit insurance systems",
  "React, Angular, HTML, CSS,Bootstrap, NodeJS, Java Spring Boot, Flask, OracleDB, MongoDB, MySQL, Nginx, Keycloak, Git Command, Docker",
  "User Requirement Specification, System Integration Testing, User Assessment Testing",
];

export default function Skills() {
  return (
    <Container
      maxWidth="xl"
      className="container"
      sx={{
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginY: "3em",
      }}
    >
      <Grid
        container
        spacing={4}
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginY: "30px",
        }}
      >
        <Grid
          className="fade_in"
          size={{ sx: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DevicesIcon sx={{ fontSize: "5rem" }} />
          <CardComponent
            subTitle={CardTitle[0]}
            description={CardDescription[0]}
          />
        </Grid>
        <Grid
          className="fade_in"
          size={{ sx: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HandymanIcon sx={{ fontSize: "5rem" }} />
          <CardComponent
            subTitle={CardTitle[1]}
            description={CardDescription[1]}
          />
        </Grid>
        <Grid
          className="fade_in"
          size={{ sx: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AssignmentTurnedInIcon sx={{ fontSize: "5rem" }} />
          <CardComponent
            subTitle={CardTitle[2]}
            description={CardDescription[2]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
