import { Box, Typography, styled, useTheme } from "@mui/material";
import IconButton from "../../IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Div = styled(Box)`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  padding-bottom: 8px;
  z-index: 1500;
  background-color: transparent;

  @media (max-width: 1024.95px) {
    padding-bottom: 8px;
  }
`;

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "rgba(255,255,255,.80)" : "#37474f",
  fontWeight: 700,
  fontSize: "1.25rem",
}));

type HeadProps = {
  onClickButton: React.MouseEventHandler<HTMLButtonElement>;
};

const Head: React.FC<HeadProps> = ({ onClickButton }) => {
  const {
    palette: { mode },
  } = useTheme();

  const isDarkMode = mode === "dark";

  return (
    <Div>
      <Text>MENU</Text>
      <IconButton
        onClick={onClickButton}
        sx={{
          border: `1px solid ${isDarkMode ? "#3C3C3C" : "#E4E8F0"}`,
          color: isDarkMode ? "rgba(255,255,255,.80)" : "#9e9e9e",
        }}
      >
        <CloseIcon />
      </IconButton>
    </Div>
  );
};

export default Head;
