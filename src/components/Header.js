import '../cards.css'

function Header() {
  return(
    <div>
      <div className="space-between">
        <p>Memory Card Game</p>
        <div>
          <p>Score: </p>
          <p>Best Score: </p>
        </div>
      </div>
      <div>
        <ul className="cards">
          <li>
            <a href="" className="card">
              <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
            </a>      
          </li>
          <li>
            <a href="" className="card">
              <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="card">
              <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="card">
              <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
            </a>
          </li>    
        </ul>
      </div>
    </div>
  )
}

export default Header