import { Button, Flex, Text } from '@radix-ui/themes';

export default function Home() {
  return (
    <main>
      <h2 className="category_title">Hello CyberSoft</h2>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        Click me
      </a>
      <button type="button" className="btn">
        Đăng nhập
      </button>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :</Text>
        <Button>Let's go</Button>
      </Flex>
    </main>
  );
}
