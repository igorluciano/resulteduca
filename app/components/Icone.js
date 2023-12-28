import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icone({ as, ...rest }) {
  return (
    <Box as="span" marginLeft={2} {...rest }><FontAwesomeIcon icon={as} /></Box>
  );
}