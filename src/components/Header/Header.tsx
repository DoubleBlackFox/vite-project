import './Header.css'


export default function Header(props:{title: string; phone:number}) {
  return (
    <>
    
    <h2 className='header-title'>{props.title}</h2>
    <h2 className='header-phone'>{props.phone}</h2>
    
    </>
  )
}
