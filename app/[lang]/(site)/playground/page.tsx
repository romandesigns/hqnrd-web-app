import { Card, ThemeToggle } from '@/components/features';
import { Text } from '@/components/ui/Text';

export default function PlaygroundPage() {
  return (
    <>
      <ThemeToggle />
      <div>
        <Text variant="h1" align="center">
          Playground Page
        </Text>
        <div className="mx-auto w-md p-4">
          <Card Header="Card Header">This is a card component inside the playground page.</Card>
        </div>
      </div>
    </>
  );
}
