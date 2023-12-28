import { Box } from "@chakra-ui/react"; 

export default function Animate({ children, tipo, ...rest }) {
  return (
    <Box as="div" className={`animate__animated animate__${tipo ? tipo : "pulse"}`} {...rest}>
      {children}
    </Box>
  );
}