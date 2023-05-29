import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FC } from "react";
import {
  BookListProps2022,
  BookListProps2023,
} from "../../../data/book-list-props.ts";
import { BookBar } from "../../BookBar/index.tsx";

export const BookAccordian: FC = () => {
  return (
    <>
      <Card variant={"elevated"}>
        <CardBody>
          <Text> Books Read </Text>
        </CardBody>
      </Card>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                2022
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {BookListProps2022.map((book) => (
              <BookBar
                cover={book.cover}
                title={book.title}
                rating={book.rating}
                review={book.review}
              />
            ))}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                2023
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {BookListProps2023.map((book) => (
              <BookBar
                cover={book.cover}
                title={book.title}
                rating={book.rating}
                review={book.review}
              />
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
