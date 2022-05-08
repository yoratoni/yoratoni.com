import { Link, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";


const CLink = ({children}) => (
    <Link color={useColorModeValue("#3d7aed", "#FF0000")}>
        {children}
    </Link>
);


export default CLink;