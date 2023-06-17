import { Box, styled } from "@mui/material";
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
  font-size: 1.25rem;
  font-weight: 700;
  color: #37474f;
  background: #ffffff;
  z-index: 1500;

  @media (max-width: 1024.95px) {
    padding-bottom: 8px;
  }
`;

type HeadProps = {
  onClickButton: React.MouseEventHandler<HTMLButtonElement>;
};

const Head: React.FC<HeadProps> = ({ onClickButton }) => {
  return (
    <Div>
      <span>MENU</span>
      <IconButton onClick={onClickButton} sx={{ border: "1px solid #E4E8F0" }}>
        <CloseIcon />
      </IconButton>
    </Div>
  );
};

export default Head;
