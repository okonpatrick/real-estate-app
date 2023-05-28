import { Box } from '@chakra-ui/layout';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import { Button, Center, Stack, Text } from '@chakra-ui/react';

export default function Footer () {

  return (
    <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Facebook */}
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <a href="https://facebook.com/patrick.okon.10420">Continue with Facebook </a>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
          <a href="mailto:okonpatrick2000@gmail.com?subject=Example%20Subject&body=Example%20Body">Send Us a Email</a>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
          <Center>
          <a href="https://www.linkedin.com/in/patrick-okon/">Send to Linkedin </a>

          </Center>
        </Button>

        {/* Messenger */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
          <Center>
        <a href="https://wa.me/2347040914769"> Send to WhatsApp </a>
          </Center>
        </Button>
      </Stack>
    </Center>
     © 2023 TruRealtor, Inc.
    </Box>
  );
}
