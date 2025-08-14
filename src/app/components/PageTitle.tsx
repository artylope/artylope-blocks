interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className="text-5xl font-bold mb-6 font-heading tracking-tighter">{title}</h1>
  );
};

export default PageTitle;