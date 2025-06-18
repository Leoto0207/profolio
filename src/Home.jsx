import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IntroGrid from "./IntroGrid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Home() {
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
      <Stack
        container
        spacing={2}
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "space-between",
          padding: "15px",
        }}
      >
        <Grid size="12">
          <IntroGrid></IntroGrid>
        </Grid>
      </Stack>
    </Container>
  );
}
