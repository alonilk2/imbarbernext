import { Button, Html } from '@react-email/components';

export const Email = ({ url }) => {
  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
};