import { Link } from "react-router-dom";


export default function Header() {
  return (
   <div className="site-header">
    <Link to="/">
      <h1>AJY News Blog</h1>
    </Link>
   </div>
  )
}
