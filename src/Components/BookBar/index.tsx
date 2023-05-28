import { StarIcon } from '@chakra-ui/icons';
import { Box, Divider, Heading, Highlight, HStack, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

interface BookBarProps {
	cover: string;
	title: string;
	rating: string,
	review: string
}

export const BookBar: FC<BookBarProps> = ({ cover, title, rating, review }) => {

	return (
		<>
		<Box pb={'5px'} pl={'5px'} w='100%'>
			<Heading fontFamily={'fantasy'} lineHeight='short' pt={'8px'} size={'xs'} >
				{/* TODO: This deterministic styling is gross. We can make it better. */}
  				<Highlight query={title} styles={{px: '2', py: '1', rounded: 'full', bg: 'green.100'}} >
			  		{title}
  				</Highlight>
			</Heading>
		</Box>
		<HStack h='100px' p={5}>
				<Divider borderColor={'blackAlpha.300'} orientation='vertical' />
				<Box alignContent={'center'} boxSize={"100px"} display={'grid'} p={'5px'} >
					<Image src={cover} alt='Book Cover' boxSize={'100px'} />
				</Box>
				<Divider borderColor={'blackAlpha.300'} orientation='vertical' />
				<Box boxSize={"75px"} pl={'5px'} >
					<StarIcon boxSize={6} color={'gold'} marginY={'40%'} pr={'5px'}  />
					{rating} / 4
				</Box>
				<Divider borderColor={'blackAlpha.300'} orientation='vertical' />
				<Text as={Box} fontFamily={'serif'} w={'25%'} >
					{review}
				</Text>
			</HStack>
		</>
	);
};