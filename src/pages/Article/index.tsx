

export default function Article(props:{ heading: string; contetn: string; }) {
  return (
    <>
    <h1>{props.heading}</h1>
    <p>{props.contetn}</p>
    </>
  )
}
