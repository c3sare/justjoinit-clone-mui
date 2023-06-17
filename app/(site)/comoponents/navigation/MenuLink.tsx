"use client";
import Link from "next/link";
import { styled } from "@mui/material";
import { grey, pink } from "@mui/material/colors";
import { usePathname } from "next/navigation";

type MenuLinkProps = {
  children: React.ReactNode;
  href: string;
};

const LinkStyled = styled(Link, {
  shouldForwardProp: (propName) => propName !== "active",
})<{ active: boolean }>`
  ${(props) => `
    min-width: 64px;
    margin: 0 6px;
    padding: 0;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    font-size: 0.875rem;
    color: ${props.active ? pink[500] : grey[400]};
    letter-spacing: 0;
    line-height: 1.75;
    white-space: nowrap;
    ${
      !props.active
        ? `
        &:hover {
            color: ${pink[200]}
        }
    `
        : ""
    }
  `}
`;

const MenuLink: React.FC<MenuLinkProps> = ({ children, href }) => {
  const pathname = usePathname();

  const props = {
    href,
    active: pathname === href,
  } as any;

  return <LinkStyled {...props}>{children}</LinkStyled>;
};

export default MenuLink;
