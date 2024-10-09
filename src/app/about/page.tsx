import { Container, Heading, Text, Card, Grid } from '@radix-ui/themes';
import { Users, Lightbulb, Target, Rocket } from 'lucide-react';

export default function About() {
  const features = [
    { icon: Users, title: 'Expert Team', description: 'Our team consists of AI specialists, robotics engineers, and logistics experts.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We are at the forefront of AI research, developing new algorithms and approaches.' },
    { icon: Target, title: 'Customization', description: 'Every solution is tailored to meet the specific needs of your business.' },
    { icon: Rocket, title: 'Results-Driven', description: 'Our focus is on delivering measurable improvements in efficiency and performance.' },
  ];

  return (
    <Container size="4" className="py-16">
      <Heading size="8" mb="4">About RossNeural</Heading>
      <Text as="p" size="4" mb="8">
        RossNeural is at the forefront of AI innovation in robotics and logistics. Our team of experts combines deep learning techniques with practical industry knowledge to create cutting-edge solutions.
      </Text>
      <Grid columns={{ initial: '1', sm: '2' }} gap="4">
        {features.map((feature, index) => (
          <Card key={index}>
            <feature.icon size={24} className="mb-2" />
            <Heading size="4" mb="2">{feature.title}</Heading>
            <Text as="p" size="2">{feature.description}</Text>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}