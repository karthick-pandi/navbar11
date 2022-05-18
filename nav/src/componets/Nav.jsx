import "./Nav.css"
export const Nav=()=>{
    return(<div className="box">
        <p style={{color:"white"}}>Logobakery</p>
        <a style={{marginLeft:"600px"}} href="services.jsx">Services</a>
        <a href="project.jsx">Project</a>
        <a href="about.jsx">About</a>
        <button style={{marginLeft:"680px",backgroundColor:"blue"}}>Contact</button>
    </div>)
}