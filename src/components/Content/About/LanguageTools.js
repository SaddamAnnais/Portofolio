import styled from "@emotion/styled";
import { Box, Grid, Tooltip } from "@mui/material";
import {
  SiCplusplus,
  SiCsharp,
  SiC,
  SiHaskell,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDotnet,
  SiReact,
  SiGithub,
  SiChakraui,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiMariadbfoundation,
  SiGitlab,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import CustomTooltip from "@/components/CustomTooltip";

const StyledBox = styled(Box)(({ theme, size, padding }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 0,
  height: size ? size.xs : "5rem",
  width: size ? size.xs : "5rem",
  padding: padding ? padding : "1rem",
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    height: size ? size.sm : "5rem",
    width: size ? size.sm : "5rem",
  },
  [theme.breakpoints.up("md")]: {
    height: size ? size.md : "5rem",
    width: size ? size.md : "5rem",
  },
  [theme.breakpoints.up("lg")]: {
    height: size ? size.lg : "5rem",
    width: size ? size.lg : "5rem",
  },
  [theme.breakpoints.up("xl")]: {
    height: size ? size.xl : "5rem",
    width: size ? size.xl : "5rem",
  },
}));

const Item = (props) => {
  return (
    <Grid item xs={5} sm={4} md={4} lg={2} xl={2}>
      <CustomTooltip
        title={props.title}
        enterDelay={500}
        enterNextDelay={500}
        arrow
      >
        <StyledBox size={{ xs: "3.5rem", sm: "5rem", md: "6rem", lg: "5rem" }}>
          {props.children}
        </StyledBox>
      </CustomTooltip>
    </Grid>
  );
};

const RowItem = () => (
  <>
    <Item title="JavaScript">
      <SiJavascript size="100%" />
    </Item>
    <Item title="TypeScript">
      <SiTypescript size="100%" />
    </Item>
    <Item title="C">
      <SiC size="100%" />
    </Item>
    <Item title="C++">
      <SiCplusplus size="100%" />
    </Item>
    <Item title="C#">
      <SiCsharp size="100%" />
    </Item>
    <Item title="Python">
      <SiPython size="100%" />
    </Item>
    <Item title="Java">
      <FaJava size="100%" />
    </Item>
    <Item title="SQL">
      <TbSql size="100%" />
    </Item>
    <Item title=".NET">
      <SiDotnet size="100%" />
    </Item>
    <Item title="Haskell">
      <SiHaskell size="100%" />
    </Item>
    <Item title="React">
      <SiReact size="100%" />
    </Item>
    <Item title="NodeJs">
      <SiNodedotjs size="100%" />
    </Item>
    <Item title="ExpressJs">
      <SiExpress size="100%" />
    </Item>
    <Item title="MongoDB">
      <SiMongodb size="100%" />
    </Item>
    <Item title="Material UI">
      <SiMui size="100%" />
    </Item>
    <Item title="Chakra UI">
      <SiChakraui size="100%" />
    </Item>
    <Item title="MySQL">
      <SiMysql size="100%" />
    </Item>
    <Item title="MariaDB">
      <SiMariadbfoundation size="100%" />
    </Item>
    <Item title="Github">
      <SiGithub size="100%" />
    </Item>
    <Item title="Gitlab">
      <SiGitlab size="100%" />
    </Item>
  </>
);

const LanguangeTools = (props) => {
  return (
    <Grid
      container
      columns={20}
      spacing={2}
      mt={1}
      mx="auto"
      color="primary.main"
      maxWidth={{ xs: "90%", sm: "80%", md: "80%", lg: "100%", xl: "100%" }}
    >
      <RowItem />
    </Grid>
  );
};

export default LanguangeTools;
