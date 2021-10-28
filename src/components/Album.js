function Album(props) {
  return (
    <article
      onClick={() => {
        props.handleAlbumChange(props.id);
      }}
    >
      <h2>{props.name}</h2>
      <img src={props.art} alt={props.name} />
    </article>
  );
}

export default Album;
