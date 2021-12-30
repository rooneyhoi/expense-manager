import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

// props.children = 'children is a reserved word in React', it's used to get the nested contents of the component if the component is used as a wrapper