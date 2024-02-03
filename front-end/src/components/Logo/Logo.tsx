import styled from 'styled-components';

const StyledLogo = styled.img`
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0.6));
  transition: 0.8s ease-out;
  :hover {
    filter: none;
  }
`;

export const Logo: React.FC = () => (
  <StyledLogo src="logo.png" alt="logo" width="160px" />
);
