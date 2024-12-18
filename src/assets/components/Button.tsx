interface Props {
  children: string;
}
const Button = ({ children }: Props) => {
  return <button className="btn btn-outline-primary">{children}</button>;
};

export default Button;
