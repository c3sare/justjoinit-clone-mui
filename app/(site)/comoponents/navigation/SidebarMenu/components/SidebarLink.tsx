import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";

const ButtonStyled = styled(Button)`
  background-color: inherit;
  padding: 10px;
  min-height: 44px;
  font-weight: 600;
  padding-left: 20px;
`;

type SidebarLinkProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  href: string;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, children, href }) => {
  return (
    <ButtonStyled startIcon={icon} LinkComponent={Link} href={href}>
      {children}
    </ButtonStyled>
  );
};

export default SidebarLink;
