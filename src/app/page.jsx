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

      <div className="container_demo">
        <h3 className="demo_title_mini">Hello Nextjs</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          ratione!
        </p>
      </div>
    </main>
  );
}
