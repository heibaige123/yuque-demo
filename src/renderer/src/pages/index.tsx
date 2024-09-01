export * from './LeftAside/LeftAside';
export * from './Content/Content';

export const Header: React.FC = () => {
    return <div className=''>header</div>;
};

export const Footer: React.FC = () => {
    return <div className=''></div>;
};

export const Layout: React.FC<{
    LeftAside: React.FC;
    Header: React.FC;
    Content: React.FC;
    Footer: React.FC;
}> = ({ LeftAside, Header, Content, Footer }) => {
    return (
        <div className='huo-full flex relative'>
            <div className='flex-none w-[18rem]'>
                <LeftAside />
            </div>
            <div className='flex-1 flex flex-col bg-slate-50 scroll-smooth overflow-y-auto'>
                <div
                    className='
          flex-none h-[3rem] w-full
          sticky z-1 top-0
          bg-slate-50 shadow-sm
        '
                >
                    <Header />
                </div>
                <div className='flex-1 mt-[3rem]'>
                    <Content />
                </div>
                <div className='flex-none h-[5rem]'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
