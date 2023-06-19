import LogoSvg from "@/components/icons/LogoSvg";
import styled from "@emotion/styled";
import Link from "next/link";

const Div = styled("div")`
  margin-top: 1px;
  margin-left: 1px;
  margin-right: -1px;
  margin-bottom: -1px;
`;

const LinkStyled = styled(Link)(({ theme }) => ({
  color: "inherit",
  display: "inline-flex",
  position: "relative",
  alignItems: "center",
  userSelect: "none",
  verticalAlign: "middle",
  appearance: "none",
  textDecoration: "none",
  backgroundColor: "transparent",
  WebkitTapHighlightColor: "transparent",
  "& > svg": {
    fill:
      (theme as any).palette.mode === "dark"
        ? "rgba(255,255,255,.80)"
        : "#37474f",
    width: 120,
  },
  "@media (max-width: 1024.95px)": {
    width: 88,
    height: 25,
  },
}));

const Logo = () => {
  return (
    <Div>
      <LinkStyled href="/">
        <LogoSvg />
      </LinkStyled>
    </Div>
  );
};

export default Logo;
