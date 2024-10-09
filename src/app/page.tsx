import { Container, Flex, Heading, Text, Section, Card, Box, Grid, Button } from '@radix-ui/themes';
import { Rocket, Zap, Cog, BarChart3, Brain, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Container size="4" className="py-8 sm:py-16 px-4 sm:px-6 md:px-8">
      <Flex direction="column" gap="9">
        <Section size="3">
          <Flex direction={{ initial: 'column', sm: 'row' }} align="center" gap="6">
            <Box className="w-full sm:w-1/2">
              <Heading size={{ initial: '6', sm: '7', md: '8' }} mb="2">Revolutionizing AI for Robotics</Heading>
              <Text size={{ initial: '3', sm: '4' }} as="p" color="gray">
                Optimizing robotics and logistics with advanced AI
              </Text>
              <Button size="3" mt="4">
                <Link href="/contact">Get Started</Link>
              </Button>
            </Box>
            <Box className="w-full sm:w-1/2 bg-blue p-4 rounded-lg mt-4 sm:mt-0">
              <Image
                src="/images/robot-delivery.png"
                alt="AI-powered robot"
                width={500}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </Box>
          </Flex>
        </Section>

        <Section size="3">
          <Heading size={{ initial: '5', sm: '6' }} mb="4">Our Services</Heading>
          <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
            {[
              { icon: Rocket, title: 'AI Model Training', description: 'Optimize delivery robots and logistics systems' },
              { icon: Zap, title: 'IoT Integration', description: 'Real-time monitoring and anomaly detection' },
              { icon: Cog, title: 'Warehouse Management', description: 'AI solutions to optimize warehouse operations' },
              { icon: BarChart3, title: 'Logistics Systems', description: 'Improve efficiency in supply chains' },
              { icon: Brain, title: 'Predictive Maintenance', description: 'AI-driven equipment maintenance scheduling' },
              { icon: Shield, title: 'Security Solutions', description: 'AI-enhanced security for logistics operations' },
            ].map((service, index) => (
              <Card key={index} className="p-4">
                <Flex gap="3" align="center">
                  {React.createElement(service.icon, { size: 24 })}
                  <Text weight="bold">{service.title}</Text>
                </Flex>
                <Text as="p" mt="2">{service.description}</Text>
              </Card>
            ))}
          </Grid>
        </Section>

        <Section size="3">
          <Heading size={{ initial: '5', sm: '6' }} mb="4">Why Choose RossNeural</Heading>
          <Text as="p" mb="4" size={{ initial: '2', sm: '3' }}>
            We offer customized AI solutions to improve operational efficiency,
            reduce failures, and maximize productivity in robotics and logistics.
            Our team of experts combines deep learning techniques with practical
            industry knowledge to create cutting-edge solutions.
          </Text>
          <Grid columns={{ initial: '1', sm: '2' }} gap="4">
            {[
              { title: 'Expertise', description: 'Our team consists of AI specialists, robotics engineers, and logistics experts with years of industry experience.' },
              { title: 'Innovation', description: 'We are at the forefront of AI research, constantly developing new algorithms and approaches to solve complex problems.' },
              { title: 'Customization', description: 'Every solution is tailored to meet the specific needs and challenges of your business and industry.' },
              { title: 'Results-Driven', description: 'Our focus is on delivering measurable improvements in efficiency, cost-savings, and overall performance.' },
            ].map((feature, index) => (
              <Card key={index} className="p-4">
                <Heading size="4" mb="2">{feature.title}</Heading>
                <Text as="p" size={{ initial: '2', sm: '3' }}>{feature.description}</Text>
              </Card>
            ))}
          </Grid>
        </Section>

        <Section size="3">
          <Heading size={{ initial: '5', sm: '6' }} mb="4">Get Started with RossNeural</Heading>
          <Text as="p" mb="4" size={{ initial: '2', sm: '3' }}>
            Ready to revolutionize your robotics and logistics operations with
            advanced AI? Contact us today for a consultation and discover how
            RossNeural can transform your business.
          </Text>
          <Button size="3">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </Section>
      </Flex>
    </Container>
  );
}