import chefClaudeLogo from "/images/chef-claude-icon.png"

export default function Header() {
    return (
        <header className="header">
            <img id="logo" src={chefClaudeLogo} alt="" />
            <h1 className="main title">Chef Claude</h1>
        </header>
    )
}