import {
  Box,
  Container,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  AspectRatio,
  Center,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function ImageGallery() {
  const [imageData, setImageData] = useState([]);
  const [isOpen, setIsOpen] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/getimage/")
      .then((response) => response.json())
      .then((data) => {
        setImageData(data);
        setIsOpen(new Array(data.length).fill(false));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOpenModal = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = true;
    setIsOpen(updatedIsOpen);
  };

  const handleCloseModal = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = false;
    setIsOpen(updatedIsOpen);
  };

  return (
    <div>
      <Center mt={10} p={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          {imageData.map((image, index) => (
            <Box key={image.refid}>
              <Box
                boxShadow="lg"
                transition="box-shadow 0.3s, transform 0.3s"
                _hover={{
                  transform: "scale(1.2)",
                  boxShadow: "xl",
                }}
                onClick={() => handleOpenModal(index)}
              >
                <Image
                  cursor="pointer"
                  borderRadius={5}
                  src={image.image_url}
                />
              </Box>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen[index]}
                onClose={() => handleCloseModal(index)}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Image- {image.refid}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Box position="relative" width="100%">
                      <Image
                        cursor="pointer"
                        width="full"
                        height="full"
                        src={image.image_url}
                      />
                    </Box>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </div>
  );
}

export default ImageGallery;
