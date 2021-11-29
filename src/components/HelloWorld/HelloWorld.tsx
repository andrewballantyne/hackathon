type HelloWorldProps = {
  /** the number to include in the title */
  count: number;
};

const HelloWorld: React.FC<HelloWorldProps> = ({ count }) => (
  <span>{`Hello World! (${count})`}</span>
);

export default HelloWorld;
