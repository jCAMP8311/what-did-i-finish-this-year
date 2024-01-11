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
  GameListProps2022,
  GameListProps2023,
  GameListProps2024
} from "../../../data/game-list-props.ts";
import { GameBar } from "../../GameBar/index.tsx";

export const GameAccordian: FC = () => {
  return (
    <>
      <Card variant={"elevated"}>
        <CardBody>
          <Text> Completed Games </Text>
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
            {GameListProps2022.map((game) => (
              <GameBar
                cover={game.cover}
                title={game.title}
                platform={game.platform}
                completion={game.completion}
                rating={game.rating}
                review={game.review}
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
            {GameListProps2023.map((game) => (
              <GameBar
                cover={game.cover}
                title={game.title}
                platform={game.platform}
                completion={game.completion}
                rating={game.rating}
                review={game.review}
              />
            ))}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                2024
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {GameListProps2024.map((game) => (
              <GameBar
                cover={game.cover}
                title={game.title}
                platform={game.platform}
                completion={game.completion}
                rating={game.rating}
                review={game.review}
              />
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
