import profile from './Rectangle 90.png'


function info() {
    return(
        <div>
            <section className="section--info">
                <container className="image--container">
                    <img src={profile} alt="profile"></img>
                </container>
                        <main>
                        <h1>Laura Smith</h1>
                        <h3>Frontend Developer</h3>
                        <h5>laurasmith.website</h5>
                        <container className="button--links">
                            <button className='Email'>Email</button>
                            <button className='LinkedIn'>LinkedIn</button>
                        </container>
                        </main>
            </section>
        </div>
    )
}

export default info;