import React, { useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Table,
  Thead,
  Tr,
  Th,
  ButtonGroup,
  IconButton,
  Tbody,
  Td,
} from "@chakra-ui/react";
import "./App.css";
import HeaderComponent from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/actions";
import { IoAdd, IoPencil, IoTrash } from "react-icons/io5";
function App() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getProducts());
  }, [fetch]);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <Grid
          minH="100vh"
          templateRows="auto 1fr"
          templateColumns="auto 1fr"
          p={"1rem 1.5rem"}
        >
          <HeaderComponent />
          <Table gridColumn="1 / span 2">
            <Thead>
              <Tr>
                <Th>Nombre:</Th>
                <Th>Descripción:</Th>
                <Th>Precio:</Th>
                <Th>Stock:</Th>
                <Th>
                  <ButtonGroup isAttached>
                    <IconButton
                      aria-label="agregar"
                      icon={<IoAdd />}
                      variant="ghost"
                    />
                  </ButtonGroup>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {products?.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.name}</Td>
                  <Td>{product.description}</Td>
                  <Td>{product.price}</Td>
                  <Td>{product.stock}</Td>
                  <Td>
                    <ButtonGroup isAttached>
                      <IconButton
                        aria-label="update"
                        icon={<IoPencil />}
                        variant="ghost"
                      />
                      <IconButton
                        aria-label="delete"
                        icon={<IoTrash />}
                        variant="ghost"
                      />
                    </ButtonGroup>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
