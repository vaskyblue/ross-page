import { Container, Heading, Text, Card, Grid } from '@radix-ui/themes';
import { Bot, Factory, Hammer, Truck, Microscope } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    { icon: Bot, title: 'Autonomous Robot Control', description: 'Advanced AI for seamless robot navigation and task execution' },
    { icon: Factory, title: 'Factory Automation', description: 'Intelligent systems for optimizing manufacturing processes' },
    { icon: Hammer, title: 'Predictive Maintenance', description: 'AI-driven forecasting to prevent equipment failures' },
    { icon: Truck, title: 'Supply Chain Optimization', description: 'End-to-end logistics enhancement using machine learning' },
    { icon: Microscope, title: 'Quality Control Systems', description: 'AI-powered inspection for unparalleled product quality' },
  ];

  return (
    <Container size="4" className="py-16">
      <Heading size="8" mb="4">Our Solutions</Heading>
      <Text as="p" size="4" mb="8">
        RossNeural delivers AI models tailored to each client's specific needs, ensuring optimal and continuous control of their operations.
      </Text>
      <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
        {solutions.map((solution, index) => (
          <Card key={index}>
            <solution.icon size={24} className="mb-2" />
            <Heading size="4" mb="2">{solution.title}</Heading>
            <Text as="p" size="2">{solution.description}</Text>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}