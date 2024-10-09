import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Button } from '@radix-ui/themes';

export default function Navbar() {
  return (
    <nav className=" shadow-md">
      <Flex justify="between" align="center" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <Flex align="center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="RossNeural Logo"
              width={400}
              height={200}
              className="mr-2"
            />
        </Link>
        </Flex>
        <Box className="hidden sm:flex sm:space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/services">Services</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/solutions">Solutions</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </Box>
      </Flex>
    </nav>
  );
};
