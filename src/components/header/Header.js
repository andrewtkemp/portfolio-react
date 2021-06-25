import React from 'react'

const Header = () => {
    return (
        <header>
         <div className="header">
				<h1>Michelle Berta</h1>
				<div>
					<h2>
						<span>Phone Number: </span> 469-358-0710
					</h2>
					<h2>
						<a href="mailto:michelle.berta@att.net" target="_blank">Email</a>
					</h2>
                    <h2>
                    <a href="https://linkedin.com/in/michelle-berta" target="-blank">LinkedIn</a>
					</h2>
                    <h2>
                    <a class="grey-text text-lighten-3" href="https://github.com/MichelleBerta?tab=repositories" target="_blank">Github</a>
					</h2>
				</div>
			</div>
        </header>
    )
}

export default Header;