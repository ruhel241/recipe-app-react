
function Header({title, styleClass, children}) {
    return(
        <header>
            <div className={`header ${styleClass}`}>
                <div className="header-box">
                    <h1 className="title">{title}</h1>
                    {children}
                </div>
            </div>
        </header>
    )
}
export default Header; 

Header.defaultProps = {
    title: "default title",
    styleClass: "header-hero"
};
  