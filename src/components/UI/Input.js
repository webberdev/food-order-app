import classes from './Input.module.css';

const input = { type: 'text' };

export default function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
}
