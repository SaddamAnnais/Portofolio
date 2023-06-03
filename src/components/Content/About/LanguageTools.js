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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import CustomTooltip from "@/components/CustomTooltip";

const StyledBox = styled(Box)(({ theme, size, padding }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 0,
  height: size ? size : "5rem",
  width: size ? size : "5rem",
  padding: padding ? padding : "1rem",
  margin: 0,
}));

const Item = (props) => {
  return (
    <Grid item xs={1.2} height="105px">
      <CustomTooltip
        title={props.title}
        enterDelay={700}
        enterNextDelay={700}
        arrow
      >
        <StyledBox size="100%">{props.children}</StyledBox>
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
  </>
);

const LanguangeTools = (props) => {
  return (
    <Grid container spacing={2} mt={1} color="primary.light">
      <RowItem />
    </Grid>
  );
};

export default LanguangeTools;
