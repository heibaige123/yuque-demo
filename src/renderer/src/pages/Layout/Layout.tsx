export interface LayoutProps {
  LeftAside: () => React.JSX.Element;
  Header: () => React.JSX.Element;
  Content: () => React.JSX.Element;
  Footer: () => React.JSX.Element;
}

export function Layout({
  LeftAside,
  Header,
  Content,
  Footer,
}: LayoutProps): React.JSX.Element {
  return (
    <div className="huo-full flex relative">
      <div className="flex-none w-[18rem]">
        {LeftAside()}
      </div>
      <div className="flex-1 flex flex-col bg-slate-50 scroll-smooth overflow-y-auto">
        <div className="
            flex-none h-[3rem] w-full
            sticky z-1 top-0
            bg-slate-50 shadow-sm
          "
        >
          {Header()}
        </div>
        <div className="flex-1 mt-[3rem]">
          {Content()}
        </div>
        <div className="flex-none h-[5rem]">
          {Footer()}
        </div>
      </div>
    </div>
  );
}
