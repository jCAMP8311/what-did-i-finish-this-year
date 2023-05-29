import { LockIcon, StarIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Heading,
  Highlight,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface GameBarProps {
  cover: string;
  title: string;
  platform: string;
  completion: boolean;
  rating: string;
  review: string;
}

export const GameBar: FC<GameBarProps> = ({
  cover,
  title,
  platform,
  completion,
  rating,
  review,
}) => {
  let completionPlatform = "";

  if (platform === "xbox") {
    completionPlatform = "xbox-achievement";
  }
  if (platform === "playstation") {
    completionPlatform = "ps-platinum-trophy";
  }

  return (
    <>
      <Box pb={"5px"} pl={"5px"} w="100%">
        <Heading
          fontFamily={"fantasy"}
          lineHeight="short"
          pt={"8px"}
          size={"xs"}
        >
          {/* TODO: This deterministic styling is gross. We can make it better. */}
          <Highlight
            query={title}
            styles={
              platform === "xbox"
                ? { px: "2", py: "1", rounded: "full", bg: "green.100" }
                : { px: "2", py: "1", rounded: "full", bg: "blue.100" }
            }
          >
            {title}
          </Highlight>
        </Heading>
      </Box>
      <HStack h="100px" p={5}>
        <Divider borderColor={"blackAlpha.300"} orientation="vertical" />
        <Box
          alignContent={"center"}
          boxSize={"75px"}
          display={"grid"}
          p={"5px"}
        >
          <Image
            alt="Platform logo"
            boxSize="60px"
            src={`./images/${platform}.png`}
          />
        </Box>
        <Divider borderColor={"blackAlpha.300"} orientation="vertical" />
        <Box
          alignContent={"center"}
          boxSize={"100px"}
          display={"grid"}
          p={"5px"}
        >
          <Image src={cover} alt="Box Art" boxSize={"100px"} />
        </Box>
        <Divider borderColor={"blackAlpha.300"} orientation="vertical" />
        <Box boxSize={"75px"}>
          <Image
            src={`./images/${completionPlatform}.png`}
            alt="Platform completion"
          />
          <Divider borderColor={"blackAlpha.300"} orientation="horizontal" />
          {completion ? (
            <UnlockIcon ml={"40%"} mr={"40%"} />
          ) : (
            <LockIcon ml={"40%"} mr={"40%"} />
          )}
        </Box>
        <Divider borderColor={"blackAlpha.300"} orientation="vertical" />
        <Box boxSize={"75px"} pl={"5px"}>
          <StarIcon boxSize={6} color={"gold"} marginY={"40%"} pr={"5px"} />
          {rating} / 4
        </Box>
        <Divider borderColor={"blackAlpha.300"} orientation="vertical" />
        <Text as={Box} fontFamily={"serif"} w={"25%"}>
          {review}
        </Text>
      </HStack>
    </>
  );
};
