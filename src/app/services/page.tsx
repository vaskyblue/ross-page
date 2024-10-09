import { Container, Heading, Text, Card, Grid } from '@radix-ui/themes';
import { Rocket, Zap, Cog, BarChart3, Brain, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Rocket, title: 'AI Model Training', description: 'Optimize delivery robots and logistics systems' },
    { icon: Zap, title: 'IoT Integration', description: 'Real-time monitoring and anomaly detection' },
    { icon: Cog, title: 'Warehouse Management', description: 'AI solutions to optimize warehouse operations' },
    { icon: BarChart3, title: 'Logistics Systems', description: 'Improve efficiency in supply chains' },
    { icon: Brain, title: 'Predictive Maintenance', description: 'AI-driven equipment maintenance scheduling' },
    { icon: Shield, title: 'Security Solutions', description: 'AI-enhanced security for logistics operations' },
  ];

  return (
    <Container size="4" className="py-16">
      <Heading size="8" mb="4">Our Services</Heading>
      <Text as="p" size="4" mb="8">
        Discover how RossNeural can transform your robotics and logistics operations with our cutting-edge AI solutions.
      </Text>
      <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
        {services.map((service, index) => (
          <Card key={index}>
            <service.icon size={24} className="mb-2" />
            <Heading size="4" mb="2">{service.title}</Heading>
            <Text as="p" size="2">{service.description}</Text>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}